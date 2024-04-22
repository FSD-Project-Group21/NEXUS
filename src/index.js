const express = require("express");
const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs")
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
// const collection = require("./config"); 
const createPost = require("../controllers/createPostController"); 
const editProfile = require("../controllers/editProfileController"); 
const interestForm = require("../controllers/interestedFormController");
const hireProfile = require("../controllers/hireStudentCardController");
const hiredProfile = require("../controllers/hiredCardsController");
const savedProfile = require("../controllers/savedStudentsCardController");
const InterestedForm = require('../models/interestedFormModels')
const mongoURI = 'mongodb://localhost:27017/NEXUS'
const userModel = require('../models/studentLoginModel');
const userController = require('../controllers/messageUserController');
const cors = require('cors');

const studentHomePage = require('../controllers/studentHomePageController');

const ejs = require('ejs');
const Chat = require('../models/chatModel');
// >>>>>>> 3b792c975126b2da3475d4d96219b5dd6f5c7b19

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
var usp = io.of('/user-namespace');



app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.json());

mongoose
    .connect(mongoURI, {
    useNewUrlParser : true,
    useCreateIndex : true,
    // useUnifiedTopology: true,
    useUnifiedTopology: true,
    })
    .then((res)=> {
        console.log("MongoDB Connected")
    });

    const store = new MongoDBStore({
        uri: 'mongodb://localhost:27017/NEXUS',
        collection: 'mysessions'
    });

  app.use(session({
      secret:'key that will sign the cookie',
      resave:false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
      saveUninitialized:false, //Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified
      store: store,
      userId:0
      })
  );
  const isAuth = (req,res,next) => {
    if(req.session.isAuth){
        next();
    }
    else
    {
        res.redirect('/login');
    }
}
usp.on('connection',(socket)=>{
  console.log("User connected");
  console.log(socket.handshake.auth.token);
  userId = socket.handshake.auth.token;
  socket.on('disconnect',()=>{
    console.log('user disconnected');
  });
  socket.on('newChat',(messageDetails)=>{
    socket.broadcast.emit('loadNewChat',messageDetails);
  });
  socket.on('loadOldChats',async (data)=>{
    var chats=await Chat.find({$or:[
      {sender_id:data.sender_id,receiver_id:data.receiver_id},
      {sender_id:data.receiver_id,receiver_id:data.sender_id}
    ]});
    socket.emit('loadChatshelper',{chats:chats,receiver_id:data.receiver_id});
  })
});

// app.post('/profilePage', createPost.CreatePost); //

app.post('/editprofileDets', function(req,res,next) {console.log('Hello'); next();}, editProfile.editprofileDets); //

app.post('/interestedToWork', interestForm.interestedWorkForm ); //

app.get("/", (req, res) => {
  res.render("landingPage");
});
app.get('/landingPage', (req, res) => {
  res.render('landingPage');
});
app.get('/login', (req, res) => {
    res.render('loginPage');
});
app.get('/adminLogin', (req, res) => {
  res.render('adminLogin');
});
app.get('/adminDashBoard', async(req, res) => {
  const users = await userModel.find({});
  res.render('adminDashBoard',{users});
});
app.get('/adminPage', (req, res) => {
  res.render('adminPage');
});
app.get('/postPage',isAuth, (req, res) => {
  res.render('postPage');
});
app.get('/studentHomePage',isAuth, studentHomePage.studHomPag);
app.get('/searchPage',isAuth, (req, res) => {
    res.render('searchPage');
});
app.get('/hirePage',isAuth, (req, res) => {
  res.render('hirePage');
});

app.get('/notificationPage',isAuth, (req, res) => {
    res.render('notificationPage');
});
app.get('/collabPage',isAuth, (req, res) => {
    res.render('collabPage');
});
app.get('/profilePage',isAuth, (req, res) => {
    res.render('profilePage');
});

  


app.post("/login", async(req,res)=>{
  const {gmail , password} = req.body;

  const user = await userModel.findOne({gmail});

  if(!user){
      return res.redirect("/login");
  }
  const isMatch = await bcryptjs.compare(password,user.password1);

  if(!isMatch){
      return res.redirect("/login");
  }
  
  req.session.isAuth=true;
  req.session.userId = user._id;
  res.redirect("/studentHomePage");
});
app.post("/adminlogin", async(req,res)=>{
  const { gmail, password } = req.body;

  if (gmail !== "nexus@gmail.com" || password !== "nexus") {
    return res.redirect("/adminLogin");
  }

  req.session.isAuth = true;
  res.redirect("/adminDashboard");
});


app.post("/signup", async(req,res)=>{
  const {fullname , phno,gmail, password1} = req.body;

  let user = await userModel.findOne({gmail});
  if(user){
      return res.redirect('/login');
  }
  const hashpassword= await bcryptjs.hash(password1,12);
  user = new userModel({
    fullname ,
    phno,
    gmail, 
    password1:hashpassword,
    about: "",
    image: "profile_img.png"
  });
  
  async function saveUser() {
      try {
        await user.save();
      } catch (error) {
        console.error(error);
      }
    }
  saveUser();
  // user.save();

  // user.save();
  res.redirect('/login')
});

app.get('/messagePage',isAuth, async(req, res) => {
  const users = await userModel.find({_id:{$nin:[req.session.userId]}});
  const currUserId = req.session.userId;
  res.render('messagePage',{users,currUserId});
});


app.post('/logout',(req,res)=>{
  req.session.destroy((err)=>{
      if(err) throw err;
      res.redirect("/")
  });
});
app.post('/deleteuser',async(req,res)=>{
  const {gmail} = req.body;
  let user = await userModel.deleteOne({gmail});
  res.redirect("/adminDashboard");
});

const port = 5000;
http.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
});

// Route to fetch data from MongoDB and send it as JSON
app.get('/interested-forms', async (req, res) => {
  try {
    const forms = await interestForm.find();
    res.json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post('/interested-work', async (req, res) => {
  try {
    // console.log(req);
    interestForm.interestedWorkForm(req.body,res);
    // interestForm(req,res);
    // res.json(forms);
    console.log('im here');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




//messaging - save
app.post('/save-chat',async (req,res)=>{
  try{
    userController.saveChat(req,res);
  }catch(error){
    res.status(500).json({ message: error.message });
  }
});
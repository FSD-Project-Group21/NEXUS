const mongoose = require('mongoose');
const postSchema = require('../models/createPostModels');

exports.viewthepost = async(req,res)=>{
    const obj_id = req.body.obj_id;
    // console.log(obj_id);
    let project = await postSchema.findOne({_id: obj_id});
    res.render("postPage",{project:project});
    // res.redirect('/profilePage')
}

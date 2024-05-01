const mongoose = require('mongoose');
const postSchema = require('../models/createPostModels');

exports.viewthepost = async(req,res)=>{
    const obj_id = req.body.obj_id;
    // console.log(obj_id);
    let project = await postSchema.findOne({_id: obj_id});
    res.render("postPage",{project:project});
    // res.redirect('/profilePage')
}
exports.viewsavedposts = async(req,res)=>{
    const obj_id = req.body.obj_id;
    let project = await postSchema.findOne({_id: obj_id});
    res.render("profilePage",{project:project});
    // res.redirect('/profilePage')
};
exports.reportposts = async (req, res) => {
    const projectId = req.body.report; // Assuming this is the project ID

    try {
        // Find the project by ID and increment the reports field by 1
        const project = await postSchema.findByIdAndUpdate(projectId, { $inc: { reports: 1 } }, { new: true });
        res.render('postPage',{project:project})
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error reporting project' });
    }
};
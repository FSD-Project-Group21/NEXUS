const mongoose = require('mongoose');
const postSchema = require('../models/createPostModels');

exports.deleteUser = async(req,res)=>{
    const obj_id = req.body.obj_id.toString();
    // console.log(obj_id);
    let postt = await postSchema.deleteOne({_id: obj_id});
    res.redirect("/adminDashboard");
}

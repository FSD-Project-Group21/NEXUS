const mongoose = require('mongoose');
const postSchema = require('../models/createPostModels');

exports.createStudentHomePage = async(req,res) => {
    try{
        const{
            projectName,
            description,
            image,
            category
        } = req.body;

        const newPost = new postSchema({
            projectName,
            description,
            image,
            category
        });

        await newPost.save();
        res.redirect('/studentHomePage');
    }
    catch(error){
        console.log(error);
    }
}
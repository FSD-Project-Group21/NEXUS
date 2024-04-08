const mongoose = require('mongoose');
const postSchema = require('../models/createNewPost');

exports.CreatePost = async(req,res) => {
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
    }
    catch(error){
        console.log(error);
    }
}
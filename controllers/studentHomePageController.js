const mongoose = require('mongoose');
const createPost = require('../models/createPostModels');

exports.studHomPag = async(req,res) => {
    const Posts = await createPost.find();
    const len = Posts.length;
    console.log(Posts);
    console.log(len);
    if(len>0) {
        console.log('Hi');
        res.render('studentHomePage', { Posts: Posts, len: len });
        console.log('Hi');
    }
    else {
        res.render('studentHomePage', { Posts: '' });
    }
}
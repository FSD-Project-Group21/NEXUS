const mongoose = require('mongoose');
const createPost = require('../models/createPostModels');

exports.studHomPag = async(req,res) => {
    const Posts = await createPost.find();
    const len = Posts.length;
    if(Posts) {
        res.render('studentHomePage', { Posts: Posts, len: len });
    }
    else {
        res.render('studentHomePage', { Posts: '' });
    }
}

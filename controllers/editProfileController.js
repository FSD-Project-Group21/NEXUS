const mongoose = require('mongoose');
const editSchema = require('../models/editProfileModels');
const newbio = require('../models/studentLoginModel');

exports.editprofileDets = async(req,res) => {
    try{
        const{
            name,
            about,
            image
        } = req.body;
        console.log('Hi');
        console.log(req.session.userId);
        const client = await newbio.findOne({ _id: req.session.userId });
        client.name = name;
        client.about = about;
        client.image = image;

        await client.updateOne();
    
    }
    catch(error){
        console.log(error);
    }
}
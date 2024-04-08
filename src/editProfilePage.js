const mongoose = require('mongoose');
const editSchema = require('../models/editProfile');

exports.editprofileDets = async(req,res) => {
    try{
        const{
            name,
            about,
            image
        } = req.body;

        const newEdit = new editSchema({
            name,
            about,
            image
        });

        await newEdit.save();
    }
    catch(error){
        console.log(error);
    }
}
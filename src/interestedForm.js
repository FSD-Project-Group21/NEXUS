const mongoose = require('mongoose');
const editSchema = require('../models/interested_Form');

exports.interestedWorkForm = async(req,res) => {
    try{
        const{
            categoryrole,
            resume,
            about
        } = req.body;

        const newEdit = new editSchema({
            categoryrole,
            resume,
            about
        });

        await newInterest.save();
    }
    catch(error){
        console.log(error);
    }
}
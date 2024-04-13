const mongoose = require('mongoose');
const editSchema = require('../models/interestedFormModels');

exports.interestedWorkForm = async(req,res) => {
    try{
        const categoryrole = req.categoryrole;
        const resume = req.resume;
        const description = req.description;

        const newEdit = new editSchema({
            categoryrole,
            resume,
            description
        });

        await newEdit.save();
    }
    catch(error){
        console.log(error);
    }
}
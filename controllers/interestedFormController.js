const mongoose = require('mongoose');
const editSchema = require('../models/interestedFormModels');

exports.interestedWorkForm = async(req,res) => {
    try{
        const studentName = req.studentName;
        const category = req.category;
        const resume = req.resume;
        const details = req.details;
        const image = req.image;
        const isSaved = req.isSaved;
        const isHired = req.isHired;

        const newEdit = new editSchema({
            studentName,
            category,
            resume,
            details,
            image,
            isSaved,
            isHired
        });

        await newEdit.save();
    }
    catch(error){
        console.log(error);
    }
}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fs = require('fs');


const profileSchema = new Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    fullname: {
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: true
    },
    profileImg:{
        data: Buffer,
        contentType: String,
    },
    interestedToWork:{
        type: Boolean,
        required: true
    },
    NoOfProjects:{
        type: Number,
        default:0,
    },
    NoOfCollaborations:{
        type: Number,
        default:0,
    },
    myPosts:{
        type:Array
    },
    savedPosts:{
        type:Array
    }
});

module.exports = mongoose.model("profile",profileSchema);
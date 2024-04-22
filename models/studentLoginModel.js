const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    gmail :{
        type: String,
        required: true,
        unique:true
    },
    phno:{
        type: String,
        required: true,
    },
    password1: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("users",userSchema);
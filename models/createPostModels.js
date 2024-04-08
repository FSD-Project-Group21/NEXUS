const mongoose = require("mongoose");

// Connect to MongoDB
const connect = mongoose.connect("mongodb://localhost:27017/NEXUS",);

// Check database connectivity
connect.then(() => {
  console.log(`Database connected successfully`);
}).catch(() => {
  console.log("Database connection failed");
});

const postSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: Array,
        required: true
    },

    category: {
        type: String,
        required: true
    },

});

module.exports = new mongoose.model("create_post", postSchema);
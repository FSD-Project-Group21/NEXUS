const mongoose = require("mongoose");

// Connect to MongoDB
const connect = mongoose.connect("mongodb://localhost:27017/NEXUS",);

// Check database connectivity
connect.then(() => {
  console.log(`Database connected successfully interested`);
}).catch(() => {
  console.log("Database connection failed");
});

const interestedSchema = new mongoose.Schema({
    categoryrole: {
        type: String,
        required: true
    },

    resume: {
        type: Buffer,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model("interestedForm", interestedSchema);
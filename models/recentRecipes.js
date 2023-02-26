const mongoose = require("mongoose");

const recentSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    image:{
        type: String,
        required: true
    },
    totalTime:{
        type: String,
        required: true
    },
    recipe:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("recentRecipes",recentSchema);
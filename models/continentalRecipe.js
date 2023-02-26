const mongoose = require("mongoose");

const continentalSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    totalTime:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    recipe:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("continentalRecipe",continentalSchema);
const express = require("express");
const auth = require("../models/authModel");
const dessertRecipe = require("../models/dessertRecipe");
const router = express.Router();

router.get("/get", (req,res)=>{
    try{
        dessertRecipe.find((err,data)=>{
            if(err){
                return res.status(400).send({ msg: "Error while retrieving data" });
            }
            res.status(200).send(data);
        });
    }catch(error){
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

router.post("/create", auth.authenticateUser, async(req,res)=>{
    try{
        const payload = req.body;
        const newData = new dessertRecipe(payload);
        await newData.save((err,data)=>{
            if(err){
                return res.status(400).send({ msg: "Error while adding data" });
            }
            res.status(201).send({ dataId: data._id, msg: "Data has been added successfully" });
        });
    }catch(error){
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

router.put("/update/:dataID", auth.authenticateUser, (req,res)=>{
    try{
        dessertRecipe.findByIdAndUpdate({ _id: req.params.dataID }, { $set: req.body }, (err,data)=>{
            if(err){
                return res.status(400).send({ msg: "Error while updating data" });
            }
            res.status(201).send({ dataId: data._id, msg: "Data have been updated" });
        });
    }catch(error){
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

router.delete("/delete/:dataID",auth.authenticateUser ,(req,res)=>{
    try{
        dessertRecipe.deleteOne({ _id: req.params.dataID }, (err,data)=>{
            if(err){
                return res.status(400).send("Error while deleting data");
            }
            res.status(200).send({ msg: `Data with id ${req.params.dataID} has been deleted` });
        });
    }catch(error){
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

module.exports = router;
const express = require('express')
const { userModel } = require('../Models/user.model')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const userRouter = express.Router()


//GET ALL USER DATA-----------------------------------------------------------------------------------------
userRouter.get('/',async(req,res)=>{
    const query = req.query
    try {
        const users = await userModel.find(query)
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({"msg" : error.message})
    }
})

//NEW USER REGISTERATION-------------------------------------------------------------------------------------
userRouter.post("/register", async(req,res)=>{
    const {name,email,pass} = req.body
    try {
        bcrypt.hash(pass, 5, async(err, hash)=> {
            const user = new userModel({name,email,pass:hash})
            await user.save()
        res.status(200).send({"msg" : "New User Has Been Register"})
        })
        
    } catch (error) {
        res.status(400).send({"msg" : error.message})
    }
})


//USER LOGIN-------------------------------------------------------------------------------------
userRouter.post("/login", async(req,res)=>{
    const {email,pass} = req.body
    try {
        const user = await userModel.findOne({email})
        if(user){
            bcrypt.compare(pass, user.pass, async(err, result)=> {
                if(result){
                    res.status(200).send({"msg" : "Login Successful", "token" : jwt.sign({ "userID":user._id }, 'sh'), "userID":user._id, "userName":user.name})
                }else{
                    res.status(400).send({"msg" : err})
                }
            })
        }
    } catch (error) {
        res.status(400).send({"msg" : error.message})
    }
})

module.exports = {
    userRouter
}
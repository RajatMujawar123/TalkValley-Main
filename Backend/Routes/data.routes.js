const express = require("express")

const dataRouter = express.Router()


dataRouter.get("/", (req,res)=>{
    try {
        res.send({"msg" : "User Data"})
    } catch (error) {
        res.status(400).send({"msg" : error.message})
    }
})

module.exports = {
    dataRouter
}
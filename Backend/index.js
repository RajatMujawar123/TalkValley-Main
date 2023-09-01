const express = require("express")
const { connection } = require("./config/db")
const { userRouter } = require("./Routes/user.router")
const cors = require('cors')
const { dataRouter } = require("./Routes/data.routes")
const { auth } = require("./MiddleWare/Auth")
require("dotenv").config()
const app = express()


app.use(express.json())
app.use(cors())

app.use("/user", userRouter)
app.use(auth)
app.use('/data', dataRouter)

app.get("/", (req,res)=>{
    try {
        res.status(200).send("Home Page")
    } catch (error) {
        res.status(400).send({"msg" : error.message})
    }
})


app.listen(process.env.port, async()=>{
try {
    await connection
    console.log("Connected to DB")
} catch (error) {
    console.log({"msg" : error.message})
}
console.log(`Server Is Running At Port ${process.env.port}`)
})
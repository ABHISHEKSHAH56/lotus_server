const express=require("express");
const cors = require('cors');
const bodyParser=require("body-parser")
const { PORT } = require("./config/serverConfig");
const ApiRoutes=require('./routes/index')
const setUpAndStartServer=async()=>{
    //create 
    const app=express();
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use("/api",ApiRoutes)

    app.listen(PORT||4000,()=>{
        console.log(`server runing at ${PORT||4000}`)
       
    })


}

setUpAndStartServer()
// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB()






















// import express from "express"
// import connectDB from "./db/index,";
// const app =express()


// DB to kisi dosere continent me hay is liye async function likhte hen
/*// ()()   ye aik function hay is ko imedately run kar do
(async()=>{
    // ager async  function lagana hay to is k sath zaroor await use hota hay
    try{
       await Mongoose.connect(`${process.env.MOGODB_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERRR",error);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })

    }
    catch(error){
        console.error("ERROR",error)
        throw err

    }

})()*/
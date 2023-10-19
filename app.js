const express = require("express")
const PORT =process.env.PORT || 3000;
const mongoose= require("mongoose")
 require("./Database/connection")
const Blackcoffer=require("./Database/Schema");
const { DataModel } = require("./Database/Schema");



const app = express();

app.get("/view",(req,res)=>{
    // const page=req.query.page
    // const limit=req.query.page
    // const startIndex=(page-1)*limit
    // const lastIndex=(page)*limit

    
    DataModel.find().skip().limit(10).then((result)=>{
        
        res.send(result)
    }).catch((err)=>{
        console.log("err",err)
    })

})
app.post("/Deal",(req,res)=>{
    const data = DataModel({
        end_year:"tushar"
    })
    
    data.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log("err",err)
    })

})

app.listen(PORT,()=>{
    console.log("listening at port",PORT)
})
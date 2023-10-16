const express = require("express")
const PORT =process.env.PORT || 3000;
 require("./Database/connection")
const Blackcoffer=require("./Database/Schema");
const { DataModel } = require("./Database/Schema");



const app = express();

app.get("/",(req,res)=>{
    
    DataModel.find().then((result)=>{
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
const mongoose=require("mongoose")
const uri = 'mongodb+srv://prabhatk850:Qwerty123@cluster0.vtksreq.mongodb.net/DumpedData?retryWrites=true&w=majority';


mongoose.connect(uri).then((result)=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log("err in connecting to database",err)
})
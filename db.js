const mongoose =require("mongoose");


mongoose.connect("mongodb+srv://sagargupta:dashboard@cluster0.4blfywl.mongodb.net/mynewdatabase?retryWrites=true&w=majority").then(()=>{
    console.log("connection succesfull")
}).catch((error)=>{
    console.log(error)
})


const Userschema =new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User= mongoose.model("Users",Userschema)
module.exports =User;
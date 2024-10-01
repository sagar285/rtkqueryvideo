const express =require("express")
const app =express()
const userModel=require("./db")
const cors = require("cors")


app.use(express.json())
app.use(cors({origin:"*"}))


app.post("/userRegister",async(req,res)=>{
    
    const {name,email,password} =req.body;
    try {
    const userdata = await userModel.create({
          name,email,password
    })
    return res.status(200).send({message:"user Registered Succesfully",data:userdata})

} catch (error) {
        return res.status(500).send({message:"server error",error})
}

})


app.get("/allusers",async(req,res)=>{
    try {
       const Allusers = await userModel.find()  
       return res.status(200).send({data:Allusers});
    } catch (error) {
       return res.status(500).send({message:"server error",error});
    }
   
})


app.get("/user/:id",async(req,res)=>{
    try {
        const userdata = await userModel.findOne({_id:req.params.id});
       return res.status(200).send({data:userdata});
    } catch (error) {
       return res.status(500).send({message:"server error",error});
    }
})

app.delete("/user/:id",async(req,res)=>{
    try {
        await userModel.deleteOne({_id:req.params.id})
       return res.status(200).send({messsage:"user deleted sccesfullyy"});

    } catch (error) {
       return res.status(500).send({message:"server error",error});
    }
})




app.listen(4000,()=>{
    console.log("server listening on port no 4000");
})
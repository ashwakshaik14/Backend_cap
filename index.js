const express=require("express")
const app=express();
const path=require("path")
const mongoose=require("mongoose")
const dotenv =require("dotenv")
dotenv.config()
const port = process.env.port || 4004;


app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","o.html"));
})

app.listen(port,()=>{
    console.log("server is listening")
    mongoose.connect(process.env.mongo_uri)
    .then(() => {
        console.log("MongoDB is connected");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
    
});
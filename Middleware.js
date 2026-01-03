const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Root route runnning");
})

app.get("/second",(req,res)=>{
    res.send("It is  running");
})

app.listen(3000);
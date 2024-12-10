const express = require("express");
const app=express();
require("dotenv").config();
require("./conn/conn");
const cors=require("cors");
const path =require("path");
const UserAPI= require("./routes/user");
const TaskAPI = require("./routes/task");
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.use("/api/v1",UserAPI);
app.use("/api/v2",TaskAPI);
//Localhost:1000/api/v1/sign-in

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });

// app.use("/",(req,res)=>{
//     res.send("hello from backend side");
// });

const PORT =1000;

// app.get("/",(req,res) => {
//     app.use(express.static(path.resolve(__dirname,"frontend","build")));
//     res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
// });

app.listen(PORT,()=>{
    console.log("server started");

});
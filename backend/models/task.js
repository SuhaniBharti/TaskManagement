const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,  
        unique:true,
    },
    important:{
        type:Boolean,
        default:false,
    },
    complete:{
        type:Boolean,
        default:false,
    },
},{
        timestamps: true // Proper placement of timestamps option
    }); 
module.exports=mongoose.model("task",TaskSchema);
import mongoose from "mongoose";


const courseTopicSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
   

})
import mongoose from 'mongoose';


const courseSchema= new mongoose.Schema({
name:String,
description:String,
alias:String,
icon:{
    url:{
link:String,
publicId:String
    }
},

createdAt:{
    type:String,
    default:new Date()
}

})


const Course=mongoose.model('Course',courseSchema)


export default Course
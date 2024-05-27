import Course from "../Models/courseModel.js";

export const createNewCourse=async(req,res)=>{
 
    const {name,description,alias}=req.body
    const course=await Course.find({name:name});
    if(course.length>0){
        console.log('course lists',course);

        return res.status(401).json({
            success:false,
            message:"Course already register"
        })
    }
    const save=Course.create({
        name:name,
        description:description,
        alisa:alias,
        icons:{
            publicId:'',
            url:''
        },
        

    });

    if(!save){
        return  res.status(401).json({
            success:false,
            message:"Something went wrong 🤕"
        })
    }


    if(save){
        return  res.status(200).json({
            success:true,
            message:'New course created successfully👌✨ '
        })
    }

}


export const  getAllCourse=async(req,res)=>{
    const courseLists=await Course.find();
    return res.status(200).json({
        success:true,
        courseLists:courseLists
    })
    
}
//  delete course  with id  
export const deleteCourse=async(req,res,next)=>{
    console.log('params',req.params.id)
const course=await Course.findById(req.params.id)

}


//  course content 
export const addTopicInCourse=(req,res)=>{

    const {title,description}=req.body;
    console.log(req.body)

}
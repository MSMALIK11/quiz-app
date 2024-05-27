import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        minLength:3,
        maxLength:20,
        required:true,
        trim:true
    },
    password:{
        type:String,
       
    }
});

let PRIVATE_KEY="HEYSHOAIB"

userSchema.methods.hashPassword=async function(password){
    const hashPass = await bcrypt.hash(password, 10);
    return hashPass
}

userSchema.methods.getJwtToken=async function(data){
    const token = await jwt.sign({
        data: data
      }, PRIVATE_KEY, { expiresIn: 60 * 60 });
    return token
}


const User=mongoose.model('User',userSchema);

export default User


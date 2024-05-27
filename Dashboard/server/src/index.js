import  express  from 'express';
import authRoutes from './Routes/authRoutes.js';
import  dotenv  from 'dotenv';
import {connectToDB} from './Config/db.js';
import courseRoutes from './Routes/courseRoutes.js';
const app =express();
dotenv.config({ path: './Config/.env' });
app.use(express.json());
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/course',courseRoutes)

app.use('/test',(req,res)=>{
    return res.status(200).json({
        status:true,
        message:'Server Is Running ✌️😎'
    })
});

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

connectToDB()
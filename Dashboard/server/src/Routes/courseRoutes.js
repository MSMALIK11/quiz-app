import express from 'express';
import { addTopicInCourse, createNewCourse, deleteCourse, getAllCourse } from '../Controllers/courseController.js';
import { authentication } from '../middleware/authentication.js';

const courseRoutes=express.Router();

courseRoutes.post('/new',authentication,createNewCourse);
courseRoutes.get('/all', authentication,getAllCourse)
courseRoutes.delete('/:id', authentication,deleteCourse)
courseRoutes.post('/:id', authentication,addTopicInCourse)

export default courseRoutes

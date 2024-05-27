import express from 'express';
import { login, signUp } from '../Controllers/Auth/login.js';

const authRoutes = express.Router();

// Use the route() method directly on the router object
authRoutes.post('/login', login);
authRoutes.post('/signup', signUp);


export default authRoutes;

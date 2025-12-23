
import express from 'express';
import { AuthController } from './auth.controller';


const router = express.Router();


// Signup user route
router.post('/signup', AuthController.signUpUser);


export const AuthRoutes = router;
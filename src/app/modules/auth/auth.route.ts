import express from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './auth.validation'

const router = express.Router()

// Signup user route
router.post(
  '/signup',
  AuthController.signUpUser,
  validateRequest(UserValidation.signupUserValidationSchema)
)

// login user route
router.post(
  '/login',
  AuthController.logInUser,
  validateRequest(UserValidation.loginUserValidationSchema)
)

export const AuthRoutes = router

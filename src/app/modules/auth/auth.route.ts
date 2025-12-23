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

export const AuthRoutes = router

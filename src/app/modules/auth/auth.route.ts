import express from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './auth.validation'
import auth from '../../middlewares/auth'

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

// logout user route
router.post(
  '/logout',
  auth(),
  AuthController.logOutUser,
)

// Update User
router.patch(
    '/update-user',
    auth(),
    validateRequest(UserValidation.updateUserValidationSchema),
    AuthController.updateUser
);

export const AuthRoutes = router

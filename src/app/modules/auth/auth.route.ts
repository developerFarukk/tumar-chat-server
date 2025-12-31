import express from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './auth.validation'
import auth from '../../middlewares/auth'
import { arcjetProtection } from '../../middlewares/arcjet.middleware'

const router = express.Router()

// Signup user route
router.post(
  '/signup',
  arcjetProtection,
  AuthController.signUpUser,
  validateRequest(UserValidation.signupUserValidationSchema)
)

// login user route
router.post(
  '/login',
  arcjetProtection,
  AuthController.logInUser,
  validateRequest(UserValidation.loginUserValidationSchema)
)

// logout user route
router.post(
  '/logout',
  // auth(),
  AuthController.logOutUser,
)

// Update User
router.patch(
    '/update-user',
    auth(),
    validateRequest(UserValidation.updateUserValidationSchema),
    AuthController.updateUser
);

// Change Password by user
router.patch(
    '/change-password', 
    auth(),
    validateRequest(UserValidation.userPasswordChangeValidationSchema),
    AuthController.userPasswordChange
);

export const AuthRoutes = router

import AppError from '../../errors/AppError'
import { TUser } from './auth.interface'
import { User } from './auth.model'
import httpStatus from 'http-status'

// Signup user intro to DB
const signupUserIntroDB = async (payload: TUser) => {

  // Check if the user already exists by email
  const existingUser = await User.findOne({ email: payload.email })

  if (existingUser) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'Email is already registered')
  }

  // Check if the user already exists by number
  const existingnumber = await User.findOne({ number: payload.number })

  if (existingnumber) {
    throw new AppError(
      httpStatus.NOT_ACCEPTABLE,
      'Number is already registered'
    )
  }

  //   const result = await User.create(payload)
  const publicUserData = await User.create(payload)

  const result = await User.getPublicUserData(publicUserData._id)

  return result
  //   return null
}


// login user
const loginUserIntoDB = async (payload: TUser) => {
    console.log("login user", payload);
    
}

export const AuthService = {
  signupUserIntroDB,
  loginUserIntoDB
}

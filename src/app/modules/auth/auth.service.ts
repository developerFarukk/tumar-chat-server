import AppError from '../../errors/AppError'
import { TUser } from './auth.interface'
import { User } from './auth.model'
import httpStatus from 'http-status'

// Signup user intro to DB
const signupUserIntroDB = async (payload: TUser) => {
  // Check if the user already exists by email
  const existingUser = await User.findOne({ email: payload?.email })

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

  const result = await User.getPublicUserData(publicUserData?.email)

  return result
}

// login user
const loginUserIntoDB = async (payload: TUser) => {
  const user = await User.isUserExistsByEmail(payload?.email)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalid credentials!')
  }

  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    user.password
  )

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Invalid credentials!')
  }

  const result = await User.getPublicUserData(user?.email)

  //   console.log('login user', user)

  return result
}

export const AuthService = {
  signupUserIntroDB,
  loginUserIntoDB,
}

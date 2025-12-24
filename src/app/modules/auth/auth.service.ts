/* eslint-disable @typescript-eslint/no-unused-vars */
import config from '../../config'
import AppError from '../../errors/AppError'
import { TAuth, TJwtPayload, TUser } from './auth.interface'
import { User } from './auth.model'
import httpStatus from 'http-status'
import { createToken } from './auth.utils'
import { sendWelcomeEmail } from '../../email/emailHandlers'
import jwt, { JwtPayload } from 'jsonwebtoken'
import bcrypt from 'bcrypt'

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

  if (!config.client_url) {
    throw new Error('Client URL is not configured')
  }

  if (result) {
    await sendWelcomeEmail(result?.email, result?.name, config.client_url)
  }

  return result
}

// login user
const loginUserIntoDB = async (payload: TAuth) => {
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

  const userData = await User.getPublicUserData(user?.email)

  const jwtPayload: TJwtPayload = {
    _id: userData?._id as string,
    name: userData?.name as string,
    email: userData?.email as string,
    // role: user.role,
    image: userData?.image as string,
    // status: user?.status,
    address: userData?.address,
    number: userData?.number,
  }

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  )

  //   console.log('login user', accessToken)

  return {
    AccessToken: accessToken as string,
  }
}

// LogOut user
const logOutuserIntoDB = async (token: string) => {
  let decoded

  // checking if the given token is valid
  try {
    decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload
  } catch (err) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Unautorized')
  }

  const { exp } = decoded

  const expireToken = exp ? new Date(exp * 1000) : new Date()

  if (expireToken < new Date()) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Token has expired')
  }

  return null
}

// Update User
const updateUserIntoDB = async (email: string, payload: Partial<TUser>) => {
  const existingUser = await User.findOne({ email: email })

  if (!existingUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found!')
  }

  const result = await User.findOneAndUpdate({ email: email }, payload, {
    new: true,
  })
  return result
}

// Change Password by user
const userPasswordChangeIntoDB = async (
  email: string,
  payload: { oldPassword: string; newPassword: string }
) => {

  const { oldPassword, newPassword } = payload

  // // Find the user by email and select the password field
  const user = await User.findOne({ email: email }).select('+password')

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!')
  }

  // if (user.status === 'blocked') {
  //     throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!');
  // }

  // if (user.isDeleted) {
  //     throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted!');
  // }

  // // Compare the old password with the hashed password in the database
  const isPasswordMatch = await bcrypt.compare(oldPassword, user?.password)

  if (!isPasswordMatch) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Old password is incorrect!')
  }

  const newHashedPassword = await bcrypt.hash(
    newPassword,
    Number(config.bcrypt_salt_rounds)
  )

  await User.findOneAndUpdate(
    {
      email: email,
    },
    {
      password: newHashedPassword,
      passwordChangedAt: new Date(),
    }
  )

  return null
}

export const AuthService = {
  signupUserIntroDB,
  loginUserIntoDB,
  logOutuserIntoDB,
  updateUserIntoDB,
  userPasswordChangeIntoDB,
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import AppError from '../errors/AppError'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import { User } from '../modules/auth/auth.model'

export const socketAuthMiddleware = async (socket: any, next: any) => {
  try {
    const cookieHeader = socket.handshake.headers.cookie

    let accessToken: string | null = null

    if (cookieHeader) {
      const cookies = cookieHeader.split('; ').reduce(
        (acc: any, item: any) => {
          const [key, value] = item.split('=')
          acc[key] = value
          return acc
        },
        {} as Record<string, string>
      )

      accessToken = cookies.accessToken
    }

    if (!accessToken) {
      return next(
        new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!')
      )
    }

    // verify jwt
    const decoded = jwt.verify(
      accessToken,
      config.jwt_access_secret as string
    ) as JwtPayload

    const { email } = decoded

    const user = await User.getPublicUserData(email)

    if (!user) {
      return next(new AppError(httpStatus.NOT_FOUND, 'This user is not found!'))
    }

    socket.user = user
    socket.userId = user._id

    // console.log(`Socket authenticated for user: ${user.name} (${user._id})`)

    return next()
  } catch (error) {
    return next(new AppError(httpStatus.UNAUTHORIZED, 'Authentication failed'))
  }
}

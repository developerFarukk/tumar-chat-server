

import jwt from 'jsonwebtoken'
import config from '../config'

// import { Socket } from 'socket.io'
import { User } from '../modules/auth/auth.model'

interface DecodedToken {
  userId: string
}

export const socketAuthMiddleware = async (socket: any, next: any) => {
  try {
    const token = socket.handshake.headers.cookie
      ?.split('; ')
      .find((row: string) => row.startsWith('jwt='))
      ?.split('=')[1]

      console.log("token socket", token);
      console.log("SOCKET HANDSHAKE:", socket.handshake.headers);

      

    if (!token) {
      return next(new Error('Unauthorized - No Token Provided'))
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as DecodedToken

    if (!decoded?.userId) {
      return next(new Error('Unauthorized - Invalid Token'))
    }

    const user = await User.findById(decoded.userId).select('-password')

    if (!user) {
      return next(new Error('User not found'))
    }

    socket.user = user
    socket.userId = user._id.toString()

    next()
  } catch (err) {
    console.log('Socket Auth Error:', err)
    next(new Error('Unauthorized - Authentication failed'))
  }
}

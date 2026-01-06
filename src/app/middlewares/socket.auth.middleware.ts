// // app/middlewares/socket.auth.middleware.ts

// import jwt from 'jsonwebtoken'
// import config from '../config'
// import { User } from '../modules/auth/auth.model'

// // ✅ সঠিক Socket.io middleware structure
// export const socketAuthMiddleware = async (socket: any, next: any) => {
//   try {
//     console.log('🛡️ Socket Authentication Middleware Running...')
//     console.log('Socket ID:', socket.id)
//     console.log('Handshake Headers:', socket.handshake.headers)

//     // 1. কোথায় কোথায় token থাকতে পারে?
//     let token: string | undefined

//     // Option 1: Cookies থেকে (browser cookies)
//     const cookies = socket.handshake.headers.cookie || ''
//     console.log('Raw Cookies:', cookies)

//     // Cookie parse করার function
//     const parseCookies = (cookieString: string) => {
//       const cookies: Record<string, string> = {}
//       cookieString.split(';').forEach((cookie) => {
//         const [name, value] = cookie.trim().split('=')
//         if (name && value) {
//           cookies[name] = value
//         }
//       })
//       return cookies
//     }

//     const cookieObj = parseCookies(cookies)
//     console.log('Parsed Cookies:', cookieObj)

//     // বিভিন্ন নামে token খোঁজা
//     if (cookieObj.accessToken) {
//       token = cookieObj.accessToken
//     } else if (cookieObj.jwt) {
//       token = cookieObj.jwt
//     } else if (cookieObj.token) {
//       token = cookieObj.token
//     }

//     // Option 2: Authorization header থেকে
//     if (!token && socket.handshake.headers.authorization) {
//       const authHeader = socket.handshake.headers.authorization
//       console.log('Authorization Header:', authHeader)

//       if (authHeader.startsWith('Bearer ')) {
//         token = authHeader.substring(7) // "Bearer " remove
//       } else {
//         token = authHeader
//       }
//     }

//     // Option 3: Handshake auth object থেকে
//     if (!token && socket.handshake.auth?.token) {
//       token = socket.handshake.auth.token
//     }

//     console.log('🔍 Found Token:', token ? 'Yes' : 'No')

//     // 2. Token না থাকলে কি করব? (Development এর জন্য temporary solution)
//     if (!token) {
//       console.log(
//         '⚠️ No token found - Using temporary authentication for development'
//       )

//       // Development এর জন্য temporary user create করুন
//       // Production এ এটা remove করবেন
//       socket.userId = 'temp-' + Date.now()
//       socket.user = {
//         _id: socket.userId,
//         fullName: 'Development User',
//         email: 'dev@example.com',
//         isDeleted: false,
//         status: 'active',
//       }

//       console.log('✅ Temporary user created:', socket.userId)
//       return next() // Middleware pass করানো
//     }

//     // 3. Token verify করুন
//     console.log('🔐 Verifying JWT token...')

//     let decoded: any
//     try {
//       // Access token verify
//       decoded = jwt.verify(token, config.jwt_access_secret as string)
//       console.log('✅ Token decoded:', decoded)
//     } catch (accessError) {
//       console.log('Access token invalid, trying refresh token...')

//       // যদি access token invalid হয়, refresh token চেষ্টা করুন
//       try {
//         decoded = jwt.verify(token, config.jwt_refresh_secret as string)
//         console.log('✅ Refresh token decoded:', decoded)
//       } catch (refreshError) {
//         console.error('❌ Both token verification failed:', {
//           accessError: accessError.message,
//           refreshError: refreshError.message,
//         })
//         return next(new Error('Invalid token'))
//       }
//     }

//     // 4. Decoded data check করুন
//     if (!decoded?.userId && !decoded?.email) {
//       console.error('❌ Token decoded but no user identifier found')
//       return next(new Error('Invalid token payload'))
//     }

//     // 5. Database থেকে user খুঁজে বের করুন
//     let user
//     if (decoded.userId) {
//       // userId দিয়ে search
//       user = await User.findById(decoded.userId).select('-password')
//     } else if (decoded.email) {
//       // email দিয়ে search
//       user = await User.findOne({ email: decoded.email }).select('-password')
//     }

//     if (!user) {
//       console.error('❌ User not found in database')
//       return next(new Error('User not found'))
//     }

//     // 6. User status check করুন
//     if (user.isDeleted) {
//       console.error('❌ User account is deleted')
//       return next(new Error('Account deleted'))
//     }

//     if (user.status === 'blocked') {
//       console.error('❌ User account is blocked')
//       return next(new Error('Account blocked'))
//     }

//     // 7. Socket object এ user information attach করুন
//     socket.userId = user._id.toString()
//     socket.user = {
//       _id: user._id,
//       fullName: user.fullName,
//       email: user.email,
//       role: user.role,
//       profilePicture: user.profilePicture,
//     }

//     console.log('✅ Socket authentication successful!')
//     console.log('Authenticated User:', {
//       id: socket.userId,
//       name: socket.user.fullName,
//       email: socket.user.email,
//     })

//     // 8. Middleware pass করান
//     next()
//   } catch (error: any) {
//     console.error('🔥 Socket Authentication ERROR:', error)

//     // Production এ:
//     // return next(new Error('Authentication failed'))

//     // Development এ temporary user allow করুন
//     console.log('⚠️ Allowing temporary user due to error')
//     socket.userId = 'error-temp-' + Date.now()
//     socket.user = {
//       _id: socket.userId,
//       fullName: 'Error Temporary User',
//       email: 'error@example.com',
//     }
//     next()
//   }
// }

// app/middlewares/socket.auth.middleware.ts
export const socketAuthMiddleware = async (socket: any, next: any) => {
  console.log('🛡️ ===== SOCKET AUTHENTICATION =====')
  console.log('Socket ID:', socket.id)
  console.log('Headers:', socket.handshake.headers)
  console.log('Cookies:', socket.handshake.headers.cookie)
  console.log('==============================')
  console.log("- socket connected:", socket?.connected ? "✅ yes" : "❌ no");

  // টেস্টিং এর জন্য temporary user create করুন
  socket.userId = 'test-user-' + Date.now()
  socket.user = {
    _id: socket.userId,
    fullName: 'Test User',
    email: 'test@example.com',
  }

  console.log('✅ Temporary user created:', socket.userId)
  next()
}

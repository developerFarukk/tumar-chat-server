/* eslint-disable @typescript-eslint/no-explicit-any */

import { Server as HTTPServer } from 'http'
import { Server } from 'socket.io'
import config from '../config'
import { socketAuthMiddleware } from '../middlewares/socket.auth.middleware'

type UserSocketMap = Record<string, string>

let io: Server
const userSocketMap: UserSocketMap = {}

export const initSocket = (server: HTTPServer) => {
  // ✅ FIXED: CORS এবং transports যোগ করুন
  io = new Server(server, {
    cors: {
      origin: config.client_url || 'http://localhost:3000',
      credentials: true,
    },
    transports: ['websocket', 'polling'],
  })

  io.use(socketAuthMiddleware)

  // ✅ Connection event handler
  io.on('connection', (socket: any) => {
    // console.log("A user connected", socket.user.name);

    // ✅ Fix: userId undefined check
    const userId = socket.userId.toString()

    // console.log("socket user is", userId);

    if (userId) {
      userSocketMap[userId] = socket.id
      // console.log(`📝 User ${userId} mapped to socket ${socket.id}`)
    }

    // ✅ Send welcome message to client
    // socket.emit('welcome', {
    //   message: 'Connected to chat server!',
    //   userId: socket.userId,
    //   socketId: socket.id,
    //   serverTime: new Date().toISOString(),
    // })

    // ✅ Send online users to ALL clients
    const onlineUsers = Object.keys(userSocketMap)
    // console.log('👥 Online users:', onlineUsers)
    io.emit('getOnlineUsers', onlineUsers)

    // ✅ Test event handler যোগ করুন
    // socket.on('test', (data: any) => {
    //   console.log('📩 Test event received:', data)
    //   socket.emit('test-response', {
    //     message: 'Server received your test message',
    //     data: data,
    //     timestamp: new Date().toISOString(),
    //   })
    // })

    // ✅ Handle ping/pong
    socket.on('ping', () => {
      socket.emit('pong', { time: Date.now() })
    })

    // ✅ Handle disconnect
    socket.on('disconnect', () => {
      // console.log('👋 User disconnected:', socket.user.name)

      if (userId) {
        delete userSocketMap[userId]
        // console.log(`🗑️ Removed user ${userId} from online list`)
      }

      // Update online users for all
      const remainingUsers = Object.keys(userSocketMap)
      // console.log('👥 Remaining online users:', remainingUsers.length)
      io.emit('getOnlineUsers', remainingUsers)
    })

    // ✅ Handle errorr
    socket.on('error', (err: any) => {
      // console.error('Socket runtime error:', err)
      socket.emit('error_message', { message: `Something went wrong, ${err}` })
      socket.disconnect(true)
    })
  })

  // console.log('🚀 Socket.io server ready for connections')
}

export const getReceiverSocketId = (userId: string) => {
  return userSocketMap[userId]
}

export { io }

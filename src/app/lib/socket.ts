

import { Server as HTTPServer } from 'http'
import { Server } from 'socket.io'
import config from '../config'
import { socketAuthMiddleware } from '../middlewares/socket.auth.middleware'


type UserSocketMap = Record<string, string>

let io: Server
const userSocketMap: UserSocketMap = {}

export const initSocket = (server: HTTPServer) => {
  io = new Server(server, {
    cors: {
      origin: config.client_url,
      credentials: true,
    },
  })
  
  

  io.use(socketAuthMiddleware)

//   console.log("io", socketAuthMiddleware);
  

  io.on('connection', (socket: any) => {
    console.log("A user connected", socket)
    console.log('A user connected:', socket.user?.fullName)

    const userId = socket.userId
    userSocketMap[userId] = socket.id

    io.emit('getOnlineUsers', Object.keys(userSocketMap))

    socket.on('disconnect', () => {
      console.log('A user disconnected:', socket.user?.fullName)
      delete userSocketMap[userId]
      io.emit('getOnlineUsers', Object.keys(userSocketMap))
    })
  })
}

export const getReceiverSocketId = (userId: string) => {
  return userSocketMap[userId]
}

export { io }

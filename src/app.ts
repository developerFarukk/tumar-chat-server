/* eslint-disable @typescript-eslint/no-unused-vars */

import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorhandler'
import notFound from './app/middlewares/notFound'
import router from './app/routes'
import cookieParser from 'cookie-parser'
import os from 'os'
import { StatusCodes } from 'http-status-codes'
import config from './app/config'

const app: Application = express()

// middleware
app.use(express.json())
app.use(
  cors({
    origin: [
      config.client_url_local,
      config.client_url_live_1,
      config.client_url_live_2,
      config.client_url_live_3,
      config.server_url_local,
      config.server_url_live,
    ],
    // origin: [config.client_url],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'x-auth-token'],
  })
)

// Handle preflight requests
app.options('*', cors())

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1', router)

// Conect Scerver medilwere
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  const currentDateTime = new Date().toISOString()
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  const serverHostname = os.hostname()
  const serverPlatform = os.platform()
  const serverUptime = os.uptime()

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Welcome to tumar chat server',
    version: '1.0.0',
    clientDetails: {
      ipAddress: clientIp,
      accessedAt: currentDateTime,
    },
    serverDetails: {
      hostname: serverHostname,
      platform: serverPlatform,
      uptime: `${Math.floor(serverUptime / 60 / 60)} hours ${Math.floor(
        (serverUptime / 60) % 60
      )} minutes`,
    },
    developerContact: {
      email: 'web.omarfaruk.dev@gmail.com',
      website: 'developerfaruk.com',
    },
  })
})

// Health check endpoint for testing
app.get('/health', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// Socket.io test endpoint
app.get('/socket-test', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Socket.io test endpoint',
    note: 'Check if socket.io connection works',
  })
})

// Global Error Handelar
app.use(globalErrorHandler)

//Not Found Page function
app.use(notFound)

export default app

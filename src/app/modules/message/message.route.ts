import express from 'express'
import { MessageController } from './message.controller'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { MessageValidation } from './message.validation'

const router = express.Router()



// Get all user route
router.get('/all-contacts', auth(), MessageController.getAllContacts)

// send message route
router.post(
  '/send-message/:id',
  auth(),
  validateRequest(MessageValidation.messageSchema),
  MessageController.sendMessage
)

// get chat partner route
router.get('/chat-partner', auth(), MessageController.getChatPartner)

// get message by user Id route
router.get('/chat/:id', auth(), MessageController.getmessageByUserId)

export const MessageRoutes = router

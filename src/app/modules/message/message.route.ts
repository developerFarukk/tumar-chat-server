import express from 'express'
import { MessageController } from './message.controller'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { MessageValidation } from './message.validation'

const router = express.Router()

// send message route
router.post(
  '/send-message/:id',
  auth(),
  validateRequest(MessageValidation.messageSchema),
  MessageController.sendMessage
)

// Get all user route
router.get('/all-contacts', auth(), MessageController.getAllContacts)

export const MessageRoutes = router

import express from 'express'
import { MessageController } from './message.controller'
import auth from '../../middlewares/auth'

const router = express.Router()

router.get('/all-contacts', auth(),  MessageController.getAllContacts)

export const MessageRoutes = router

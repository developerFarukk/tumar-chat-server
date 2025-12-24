import express from 'express'
import { MessageController } from './message.controller'

const router = express.Router()

router.get('/all-contacts', MessageController.getAllContacts)

export const MessageRoutes = router

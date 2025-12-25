import { z } from 'zod'

// Message Validation schema
const messageSchema = z.object({
  body: z.object({
    senderId: z.string(),
    receiverId: z.string(),
    text: z.string().trim().min(1, 'Message text cannot be empty').optional(),
    image: z.string().optional(),
  }),
})

export const MessageValidation = {
  messageSchema,
}

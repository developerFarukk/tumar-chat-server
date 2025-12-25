import { z } from 'zod'

// Message Validation schema
const messageSchema = z.object({
  body: z.object({
    text: z.string().trim().min(1, 'Message text cannot be empty'),
    image: z.string(),
  }),
})

export const MessageValidation = {
  messageSchema,
}

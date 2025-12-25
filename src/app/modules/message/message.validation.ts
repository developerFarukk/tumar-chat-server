import { z } from 'zod'

// Message Validation schema
export const messageSchema = z.object({
  senderId: z
    .string()
    .regex(objectIdRegex, "Invalid sender ObjectId"),

  receiverId: z
    .string()
    .regex(objectIdRegex, "Invalid receiver ObjectId"),

  text: z
    .string()
    .trim()
    .min(1, "Message text cannot be empty")
    .optional(),

  image: z
    .string()
    .url("Image must be a valid URL")
    .optional(),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

import AppError from '../../errors/AppError'
import { User } from '../auth/auth.model'
import { TMessage } from './message.interface'
import httpStatus from 'http-status'
import { Message } from './message.model'

// Send message by user
const sendMessageIntoDB = async (
  senderId: string,
  receiverId: string,
  payload: TMessage
) => {

  const receiverExists = await User.findById({ _id: receiverId })

  if (!receiverExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Receiver does not exist')
  }

  if (senderId === receiverId) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Cannot send messages to yourself.'
    )
  }

  if (!payload?.text && !payload?.image) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Text or image is required.')
  }

  const message ={
    senderId: senderId,
    receiverId: receiverId,
    text: payload?.text,
    image: payload?.image,
  }

  const newMessage = await Message.create(message)

  //   let imageUrl;
  //     if (image) {
  //       // upload base64 image to cloudinary
  //       const uploadResponse = await cloudinary.uploader.upload(image);
  //       imageUrl = uploadResponse.secure_url;
  //     }

  return newMessage
}

// Get All Contacts Service
const getAllContactsIntoDB = async (userId: string) => {
  const filteredUsers = await User.find({ email: { $ne: userId } }).select(
    '-password'
  )

  return filteredUsers
}

export const MessageService = {
  getAllContactsIntoDB,
  sendMessageIntoDB,
}

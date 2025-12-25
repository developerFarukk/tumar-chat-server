import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { MessageService } from './message.service'
import httpStatus from 'http-status'

// send message controller
const sendMessage = catchAsync(async (req, res) => {
  const { id: receiverId } = req.params

  const senderId = req.user?._id as string

  const result = await MessageService.sendMessageIntoDB(
    senderId,
    receiverId,
    req.body
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Message send successfully',
    data: result,
  })
})

// get All user controller
const getAllContacts = catchAsync(async (req, res) => {
  const userId = req.user?.email as string

  const result = await MessageService.getAllContactsIntoDB(userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All contacts retrieved successfully',
    data: result,
  })
})

export const MessageController = {
  getAllContacts,
  sendMessage,
}

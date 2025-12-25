import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { MessageService } from './message.service'
import httpStatus from 'http-status'



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

// get Chat pertner
const getChatPartner = catchAsync(async (req, res) => {

  const loggedInUserId = req.user?._id

  const result = await MessageService.getChatePartnerIntoDB(loggedInUserId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Chat partner data retrieved successfully',
    data: result,
  })
})


// get message by user Id
const getmessageByUserId = catchAsync(async (req, res) => {

  const myId = req.user?._id

  const { id: userToChatId } = req.params

  const result = await MessageService.getmessageByUserIdIntoDB(myId, userToChatId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user chat list by id successfully',
    data: result,
  })
})

export const MessageController = {
  getAllContacts,
  sendMessage,
  getChatPartner,
  getmessageByUserId
}

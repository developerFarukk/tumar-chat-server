import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { MessageService } from "./message.service"
import httpStatus from 'http-status'


// get All user controller
const getAllContacts = catchAsync(async (req, res) => {

    console.log("ppp", req.user);
    

  const result = await MessageService.getAllContactsIntoDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All contacts retrieved successfully',
    data: result,
  })
})


export const MessageController = {
  getAllContacts,
}
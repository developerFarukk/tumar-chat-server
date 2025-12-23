import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";
import httpStatus from 'http-status';



// Signup user controller
const signUpUser = catchAsync(async (req, res) => {

    const result = await AuthService.signupUserIntroDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User signed up successfully',
        data: result,
    });
});

export const AuthController = {
    signUpUser
 }
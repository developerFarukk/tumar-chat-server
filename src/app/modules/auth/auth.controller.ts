import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";
import httpStatus from 'http-status';



// Signup user controller
const signUpUser = catchAsync(async (req, res) => {

    const result = await AuthService.signupUserIntroDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User signed up successfully',
        data: result,
    });
});


// Signup user controller
const logInUser = catchAsync(async (req, res) => {

    const result = await AuthService.loginUserIntoDB(req.body);

    const accessToken = result?.AccessToken
    
    res.cookie('accessToken', accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: true,
        sameSite: 'strict',
        secure: config.node_env === 'development' ? false : true,
    });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User logged in successfully',
        data: result,
    });
});




export const AuthController = {
    signUpUser,
    logInUser
 }
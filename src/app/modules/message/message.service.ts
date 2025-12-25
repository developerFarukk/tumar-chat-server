import { User } from "../auth/auth.model";
// import { TMessage } from "./message.interface";


// Get All Contacts Service
const getAllContactsIntoDB = async ( userId: string) => {

    // console.log(userId, payload);

    const filteredUsers = await User.find({ _id: { $ne: userId } }).select("-password");

    return filteredUsers;
}

export const MessageService = {
    getAllContactsIntoDB
}
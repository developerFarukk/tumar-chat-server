
import mongoose, { model } from "mongoose";
import { TMessage } from "./message.interface";

const messageSchema = new mongoose.Schema<TMessage>(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      trim: true,
      maxlength: 2000,
      required: false
    },
    image: {
      type: String,
      required: false
    },
  },
  { timestamps: true }
);

// export const Message = mongoose.model("Message", messageSchema);
export const Message = model<TMessage>('Message', messageSchema)


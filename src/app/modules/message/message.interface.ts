

import { Document, Types } from 'mongoose';

export interface TMessage extends Document {
  senderId: Types.ObjectId;
  receiverId: Types.ObjectId;
  text?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
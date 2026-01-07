import { Document, model, Schema } from 'mongoose'
import { TUser, UserModel } from './auth.interface'
import bcrypt from 'bcrypt'
import config from '../../config'

const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: [true, 'user name is required'],
      trim: true,
      minlength: [3, 'User name must be at least 3 characters'],
      maxlength: [100, 'User name must not exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'user Email is required'],
      unique: true,
      trim: true,
      loadClass: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password id is required'],
      minlength: [4, 'Password must be at least 4 characters'],
      maxlength: [28, 'Password must not exceed 28 characters'],
      select: 0,
      trim: true,
    },
    number: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      default: '',
    },

    // role: {
    //   type: String,
    //   enum: Object.values(UserRole),
    //   default: UserRole.CUSTOMER,
    // },
    // status: {
    //   type: String,
    //   enum: ['in-progress', 'blocked'],
    //   default: 'in-progress',
    // },
    // isDeleted: {
    //   type: Boolean,
    //   default: false,
    // },
    address: {
      type: String,
      trim: true,
      required: false,
      default: '',
    },
    image: {
      type: String,
      required: false,
      default: '',
    },
    // passwordChangedAt: {
    //   type: Date,
    //   default: null,
    // },
  },
  {
    timestamps: true,
  }
)

// Pre-save hook for hashing password
userSchema.pre('save', async function (next) {
  const user = this as TUser & Document

  if (!user.isModified('password')) {
    return next()
  }

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  )
  next()
})

// Static method to check if user exists by email
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await this.findOne({ email }).select('+password')
}

// Static method to get public user data
userSchema.statics.getPublicUserData = function (email: string) {
  return this.findOne({ email }).select('_id name email address number image')
}

// Static method to check if password matches
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword)
}

export const User = model<TUser, UserModel>('User', userSchema)

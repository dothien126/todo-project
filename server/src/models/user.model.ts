import mongoose, { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role?: string;
  isActive?: boolean;
  roleRights?: any;
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      minLength: 5,
      required: true,
      message: 'Username have min 5 characters!',
    },
    email: {
      type: String,
      minLength: 5,
      unique: true,
      required: true,
      validate: {
        validator: function (v: any) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: 'Please enter a valid email!',
      },
    },
    password: {
      type: String,
      minLength: 5,
      required: true,
      message: 'Username have min 5 characters!',
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isActive: { type: Boolean, default: false },
    roleRights: {
      type: Schema.Types.ObjectId,
      ref: 'roles',
    },
  },
  { timestamps: true }
);

export const User = model<IUser>('users', UserSchema);

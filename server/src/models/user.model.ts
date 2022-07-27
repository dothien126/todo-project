import { Document, Schema, model } from 'mongoose';
import { ITodo } from './todo.model';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role?: string;
  isActive?: boolean;
  todos: ITodo[];
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
    isActive: { type: Boolean, default: true },
    todos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'todo',
      },
    ],
  },
  { timestamps: true }
);

export const User = model<IUser>('users', UserSchema);

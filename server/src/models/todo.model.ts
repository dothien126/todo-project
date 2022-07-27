import mongoose, { Document, Schema, Types, model } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  content: string;
  status?: boolean;
  userId?: string;
}

const TodoSchema = new mongoose.Schema<ITodo>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  status: { type: Boolean, default: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
});

export const Todo = model<ITodo>('todo', TodoSchema);

import mongoose from 'mongoose';
import { User, IUser } from '../models/user.model';
import { Todo, ITodo } from '../models/todo.model';
import { CreateTodo, UpdateTodo } from '../types/types';

class TodoService {
  async createTodo(userId: string, creteTodo: CreateTodo) {
    try {
      const user = await User.findOne({ _id: new mongoose.Types.ObjectId(userId) });
      if (!user) {
        return {
          success: false,
          message: 'Please login to create todo.',
        };
      }

      const todo = new Todo();
      todo.title = creteTodo.title;
      todo.content = creteTodo.content;
      todo.userId = userId;
      await todo.save();

      user.todos.push(todo._id);
      await user.save();

      return {
        success: true,
        data: todo,
        message: 'Create todo successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Create todo fail!',
      };
    }
  }

  async getTodos(userId: string) {
    try {
      const user = await User.findOne({ _id: new mongoose.Types.ObjectId(userId) });
      if (!user) {
        return {
          success: false,
          message: 'Please login to create todo.',
        };
      }

      const todos = await Todo.find({});

      return {
        success: true,
        data: todos,
        message: 'Get all todo successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. Have not todo exist!',
      };
    }
  }

  async findTodoById(userId: string, id: string) {
    try {
      const user = await User.findOne({ _id: new mongoose.Types.ObjectId(userId) });
      if (!user) {
        return {
          success: false,
          message: 'Please login to find todo.',
        };
      }
      const todo = await Todo.findById({ _id: new mongoose.Types.ObjectId(id) });

      return {
        success: true,
        data: todo,
        message: 'Get todo successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. This todo is not exist!',
      };
    }
  }

  async updateTodo(userId: string, id: string, data: UpdateTodo) {
    try {
      const user = await User.findOne({ _id: new mongoose.Types.ObjectId(userId) });
      if (!user) {
        return {
          success: false,
          message: 'Please login to update todo.',
        };
      }
      const todo = await Todo.findByIdAndUpdate(
        {
          _id: new mongoose.Types.ObjectId(id),
        },
        {
          data,
        },
        {
          upsert: false,
        }
      );
      await todo?.save();

      return {
        success: true,
        data: todo,
        message: 'Update todo successfully.',
      };
    } catch (error) {
      return {
        succss: false,
        message: 'Oop. Error while update infor!',
      };
    }
  }

  async deleteTodo(userId: string, id: string) {
    try {
      const user = await User.findOne({ _id: new mongoose.Types.ObjectId(userId) });
      if (!user) {
        return {
          success: false,
          message: 'Please login to delete todo.',
        };
      }
      const todo = await Todo.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id) });

      return {
        success: true,
        message: 'Delete todo successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. This todo is not exist!',
      };
    }
  }
}

export default new TodoService();

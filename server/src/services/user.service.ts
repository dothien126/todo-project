import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

import { User, IUser } from '../models/user.model';

class UserService {
  async createUser(username: string, email: string, password: string, passwordConfirm: string) {
    try {
      // check user exist
      const user = await User.findOne({ email: email });
      if (user) {
        return {
          sucess: false,
          message: 'Oop. This email is already!',
        };
      }

      if (password !== passwordConfirm) {
        return {
          success: false,
          message: 'Oop. Please enter password again!',
        };
      }

      // hash password
      const salt = await bcrypt.genSalt(10);
      const passwordHashed = await bcrypt.hash(password, salt);

      // create user
      const newUser = new User();
      newUser.username = username;
      newUser.email = email;
      newUser.password = passwordHashed;

      await newUser.save();

      return {
        success: true,
        data: newUser,
        message: 'Created user successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. Please create again!',
      };
    }
  }

  async getUsers() {
    try {
      const users = await User.find({});

      return {
        success: true,
        data: users,
        message: 'Get all user successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. Have not user exist!',
      };
    }
  }

  async findUserById(id: string) {
    try {
      const user = await User.findById(id);

      return {
        success: true,
        data: user,
        message: 'Get user successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. This user is not exist!',
      };
    }
  }

  async findUserByEmail(email: string) {
    try {
      const user = await User.findOne({ email });

      return {
        success: true,
        data: user,
        message: 'Get user successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. This user is not exist!',
      };
    }
  }

  async updateUser(id: string, data: IUser) {
    try {
      const user = await User.findByIdAndUpdate({ id, data });

      return {
        success: true,
        data: user,
        message: 'Update user successfully.',
      };
    } catch (error) {
      return {
        succss: false,
        message: 'Oop. Error while update infor!',
      };
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await User.findByIdAndDelete({ id });

      return {
        success: true,
        message: 'Delete user successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. This user is not exist!',
      };
    }
  }

  async getAllTodoOfUser(id: string) {
    try {
      const user = await User.findOne({ _id: new mongoose.Types.ObjectId(id) }).populate('todos');

      return {
        success: true,
        data: user?.todos,
        message: 'List of todo of user',
      };
    } catch (error) {
      return {
        success: false,
        message: 'User is not exist!',
      };
    }
  }
}

export default new UserService();

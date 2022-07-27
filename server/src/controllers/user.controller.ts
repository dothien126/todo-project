import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  async createUserHandler(req: Request, res: Response) {
    try {
      const { username, email, password, passwordConfirm } = req.body;
      if (!username || !email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Oop. Check again!',
        });
      }

      const newUser = await UserService.createUser(username, email, password, passwordConfirm);
      if (newUser) {
        return res.status(200).json(newUser);
      } else {
        return res.status(400).json({
          success: false,
          message: 'Oop. Fail to create user!',
        });
      }
    } catch (error) {}
  }

  // GetAllUsers
  async getAllUsersHandler(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Oop. Getting all users failed!',
      });
    }
  }

  // find User
  async findUserHandler(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await UserService.findUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Oop. Getting user failed!',
      });
    }
  }

  // update user
  async updateUserHandler(req: Request, res: Response) {
    try {
      const body = req.body;
      const userId = req.params.id;
      const updatedUser = await UserService.updateUser(userId, body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Oop. Updating user failed!',
      });
    }
  }

  // delete user
  async deleteUserHandler(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const deletedUser = await UserService.deleteUser(userId);
      res.status(200).json({
        success: true,
        message: 'Delete user successfully.',
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Oop. Deleting user failed!',
      });
    }
  }

  // Get all todo of user
  async getAllTodoOfUserHandler(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const users = await UserService.getAllTodoOfUser(id);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Oop. Getting all users failed!',
      });
    }
  }
}

export default new UserController();

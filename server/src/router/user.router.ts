import express from 'express';
const router = express.Router();
import { middlewareAuth } from '../middleware/decode-jwt-token';

import UserController from '../controllers/user.controller';

// Create User
router.post('/user', UserController.createUserHandler);

// Get all Users
router.get('/user', middlewareAuth.verifyToken, UserController.getAllUsersHandler);

// Find User
router.get('/user/:id', middlewareAuth.verifyToken, UserController.findUserHandler);

// Update User
router.put('/user/:id', middlewareAuth.verifyToken, UserController.updateUserHandler);

// Delete User
router.delete('/user/:id', middlewareAuth.verifyToken, UserController.deleteUserHandler);

// Get all todo of user
router.get('/user/todo/:id', middlewareAuth.verifyToken, UserController.getAllTodoOfUserHandler);

export default router;

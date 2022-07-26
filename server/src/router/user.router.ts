import express from 'express';
const router = express.Router();

const { rightToAction } = require('../middlewares/decode-jwt-token');
import UserController from '../controllers/user.controller';

// Create User
router.post('/user', UserController.createUserHandler);

// Get all Users
router.get('/user', rightToAction('get-users'), UserController.getAllUsersHandler);

// Find User
router.get('/user/:id', UserController.findUserHandler);

// // Update User
router.put('/user/:id', rightToAction('update-users'), UserController.updateUserHandler);

// // Delete User
router.delete('/user/:id', rightToAction('delete-users'), UserController.deleteUserHandler);

export default router;

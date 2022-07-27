import express from 'express';
const router = express.Router();
import { middlewareAuth } from '../middleware/decode-jwt-token';

import TodoController from '../controllers/todo.controller';

// Create Todo
router.post('/todo/:userId', middlewareAuth.verifyToken, TodoController.createTodoHandler);

// Get all Todos
router.get('/todo/:userId', middlewareAuth.verifyToken, TodoController.getAllTodosHandler);

// Find Todo
router.get('/todo/:userId/:id', middlewareAuth.verifyToken, TodoController.findTodoHandler);

// // Update Todo
router.put('/todo/:userId/:id', middlewareAuth.verifyToken, TodoController.updateTodoHandler);

// // Delete Todo
router.delete('/todo/:userId/:id', middlewareAuth.verifyToken, TodoController.deleteTodoHandler);

export default router;

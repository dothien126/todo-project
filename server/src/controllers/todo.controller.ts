import { Request, Response } from 'express';
import TodoService from '../services/todo.service';

class TodoController {
  async createTodoHandler(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      const data = req.body;
      if (!data) {
        return res.status(400).json({
          success: false,
          message: 'Oop. Check again!',
        });
      }

      const newTodo = await TodoService.createTodo(userId, data);
      if (newTodo) {
        return res.status(200).json(newTodo);
      } else {
        return res.status(400).json({
          success: false,
          message: 'Oop. Fail to create Todo!',
        });
      }
    } catch (error) {}
  }

  // GetAllTodos
  async getAllTodosHandler(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const todos = await TodoService.getTodos(userId);
      return res.status(200).json(todos);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Oop. Getting all Todos failed!',
      });
    }
  }

  // find todo
  async findTodoHandler(req: Request, res: Response) {
    try {
      const { userId, id } = req.params;
      const todo = await TodoService.findTodoById(userId, id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Oop. Getting Todo failed!',
      });
    }
  }

  // update todo
  async updateTodoHandler(req: Request, res: Response) {
    try {
      const data = req.body;
      const { userId, id } = req.params;

      const updatedTodo = await TodoService.updateTodo(userId, id, data);
      
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Oop. Updating Todo failed!',
      });
    }
  }

  // delete todo
  async deleteTodoHandler(req: Request, res: Response) {
    try {
      const { userId, id } = req.params;
      const deletedTodo = await TodoService.deleteTodo(userId, id);
      res.status(200).json({
        success: true,
        message: 'Delete Todo successfully.',
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Oop. Deleting Todo failed!',
      });
    }
  }
}

export default new TodoController();

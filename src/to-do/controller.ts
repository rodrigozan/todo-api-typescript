import { Request, Response } from 'express';

import * as TodoService from './service';

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const allTodos = await TodoService.getAllTodos();
    res.status(200).json({ allTodos });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  const { title, completed } = req.body;
  try {
    const newTodo = await TodoService.createTodo(title, completed);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

export const getTodoById = async (req: Request, res: Response): Promise<void> => {
    const todoId = req.params.id; // Assuming you pass the ID as a URL parameter.
    try {
      const todo = await TodoService.getTodoById(todoId);
      if (todo) {
        res.status(200).json(todo);
      } else {
        res.status(404).json({ error: 'Todo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const updateTodo = async (req: Request, res: Response): Promise<void> => {
    const todoId = req.params.id;
    const updatedFields = req.body;
    try {
      const updatedTodo = await TodoService.updateTodo(todoId, updatedFields);
      if (updatedTodo) {
        res.status(200).json(updatedTodo);
      } else {
        res.status(404).json({ error: 'Todo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    const todoId = req.params.id;
    try {
      const isDeleted = await TodoService.deleteTodo(todoId);
      if (isDeleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Todo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };



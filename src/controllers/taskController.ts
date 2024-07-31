import { Request, Response } from 'express';
import { TaskService } from '../services/taskService';
import { validateCreationTask } from '../middlewares/taskMiddleware';

const taskService = new TaskService();

// Pegando todas as tasks
export const getTasks = (req: Request, res: Response) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

// Pegando tasks por meio do Id
export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params
  const taskById = taskService.getTaskById(id)
  
  res.json(taskById)
}

// Criando task
export const createTask = (req: Request, res: Response) => {
  const { title, description } = req.body;
  
  if(validateCreationTask(title, description) == true){
    const newTask = taskService.createTask(title, description);
    res.status(201).json(newTask);
  }else{
    res.status(400).json({ message: 'Algo de inesperado aconteceu, tente novamente mais tade!' })
  }
};

// Atualizando as tasks
export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const updatedTask = taskService.updateTask(id, title, description, status);
  res.json(updatedTask);
};

// Deletando as tasks
export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  taskService.deleteTask(id);
  res.status(204).send();
};
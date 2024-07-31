import { Task } from '../models/task';
import { v4 as uuidv4 } from 'uuid';

export class TaskService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task[] {
    return this.tasks.filter(task => task.id == id)
  }

  createTask(title: string, description: string): Task {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      status: 'pendente',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, title: string, description: string, status: 'pendente' | 'em andamento' | 'concluída'): Task | null {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) return null;
    const updatedTask = {
      ...this.tasks[taskIndex],
      title,
      description,
      status,
      updatedAt: new Date(),
    };
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
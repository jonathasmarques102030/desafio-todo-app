export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'pendente' | 'em andamento' | 'concluída';
    createdAt: Date;
    updatedAt: Date;
  }
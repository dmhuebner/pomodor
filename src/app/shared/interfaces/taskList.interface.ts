import Task from './task.interface';

export default interface TaskList {
  active: boolean;
  id: string;
  listName: string;
  tasks: Task[];
  open: boolean;
}

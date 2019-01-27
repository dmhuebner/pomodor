export default interface Task {
  completed: boolean;
  description: string;
  dateCreated: Date;
  dateCompleted?: Date;
  order: number;
  id: string;
}

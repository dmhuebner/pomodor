export default interface Task {
  completed: boolean;
  description: string;
  dateCreated: string;
  dateCompleted?: string;
  id: string;
}

// TODO typing for dates below needs to get worked out

export default interface Task {
  completed: boolean;
  description: string;
  dateCreated: any;
  dateCompleted?: any;
  order: number;
  id: string;
}

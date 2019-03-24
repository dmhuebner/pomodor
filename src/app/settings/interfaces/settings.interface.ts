export default interface Settings {
  timerLength: number;
  breakLength: number;
  bumperLengthInMinutes: number;
  useTimerBumpers: boolean;
  tasksLinkedToTimer: boolean;
  autoBreak: boolean;
  moveCompletedTaskToCompletedListTimeInMin: number;
  completedTaskExpirationInDays: number;
}

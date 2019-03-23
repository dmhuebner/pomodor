import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer/timer.service';
import { TaskService } from '@task/services';
import Task from '@task/interfaces/task.interface';
import { SettingsService } from '@settings/services';
import { AuthService } from '@shared/services';
import User from '@shared/interfaces/user.interface';
import Settings from '@settings/interfaces/settings.interface';
import { CompletedTimer } from '../../interfaces/CompletedTimer.interface';
import { TaskListService } from '@task/services';
import TaskList from '@task/interfaces/taskList.interface';

@Component({
  selector: 'pm-timer-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {

  onBreak = false;
  timerOn = false;
  currentTask: Task;
  currentUser: User;
  currentSettings: Settings = {...this.settingsService.defaultSettings};
  currentTimer: CompletedTimer = {completed: false, completedWithBreak: false};
  activeTaskList: TaskList;

  constructor(public timerService: TimerService,
              public taskService: TaskService,
              public settingsService: SettingsService,
              private auth: AuthService,
              private taskListService: TaskListService) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => this.currentUser = user);
    // TODO async pipe these
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
    this.taskListService.getTaskLists$().subscribe(taskLists => {
      taskLists = taskLists ? taskLists : [];
      this.activeTaskList = this.taskListService.getActiveTaskList(taskLists);
      this.currentTask = this.activeTaskList && this.activeTaskList.tasks
        ? this.activeTaskList.tasks.filter(task => !task.completed)[0]
        : null;
    });
    this.settingsService.currentSettings$.subscribe(settings => {
      this.currentSettings = settings;
      if (!this.timerOn) {
        this.timerService.setTimeLeft();
      }
    });
  }

  completeTask(taskList, task: Task): Promise<void> {
    task.completed = !task.completed;
    task.dateCompleted = task.completed ? new Date().toISOString() : null;
    return this.taskService.updateTask(this.currentUser.uid, taskList, task);
  }

  onStartTime() {
    this.timerService.startTimer();
  }

  onResetTimer() {
    this.timerService.resetTimer();
  }

  onEndBreak() {
    // TODO should this be in a service? Probably...
    if (this.onBreak) {
      this.timerService.addCompletedTimer(this.currentTimer);
    }

    this.timerService.endBreak();
  }

  bumpTimerBack() {
    this.timerService.bumpTimerBack();
  }

  bumpTimerForward() {
    this.timerService.bumpTimerForward();
  }

}

import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../shared/services/timer/timer.service';
import { TaskService } from '../../../shared/services/task/task.service';
import Task from '../../../shared/interfaces/task.interface';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import User from '../../../shared/interfaces/user.interface';
import Settings from '../../../shared/interfaces/settings.interface';
import { CompletedTimer } from '../../../shared/interfaces/CompletedTimer.interface';
import { TaskListService } from '../../../shared/services/taskList/task-list.service';
import TaskList from '../../../shared/interfaces/taskList.interface';

@Component({
  selector: 'pm-timer-container',
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
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
    this.taskListService.getTaskLists$().subscribe(taskLists => {
      taskLists = taskLists ? taskLists : [];
      this.activeTaskList = this.taskListService.getActiveTaskList(taskLists);
      this.currentTask = this.activeTaskList.tasks.filter(task => !task.completed)[0];
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

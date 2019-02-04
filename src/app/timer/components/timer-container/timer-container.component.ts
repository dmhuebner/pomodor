import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../shared/services/timer/timer.service';
import { TaskService } from '../../../shared/services/task/task.service';
import Task from '../../../shared/interfaces/task.interface';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import User from '../../../shared/interfaces/user.interface';
import Settings from '../../../shared/interfaces/settings.interface';
import { CompletedTimer } from '../../../shared/interfaces/CompletedTimer.interface';

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

  constructor(private timerService: TimerService,
              public taskService: TaskService,
              public settingsService: SettingsService,
              private auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => this.currentUser = user);
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
    this.taskService.getTasks$().subscribe(tasks => {
      tasks = tasks ? tasks : [];
      this.currentTask = tasks.filter(task => !task.completed).sort(this.taskService.compareOrder).pop();
    });
    this.settingsService.currentSettings$.subscribe(settings => {
      this.currentSettings = settings;
      if (!this.timerOn) {
        this.timerService.setTimeLeft();
      }
    });
  }

  completeTask(task: Task): Promise<void> {
    task.completed = !task.completed;
    task.dateCompleted = task.completed ? new Date() : null;
    return this.taskService.updateTask(this.currentUser.uid, task);
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

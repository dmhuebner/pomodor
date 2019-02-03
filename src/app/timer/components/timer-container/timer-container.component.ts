import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../shared/services/timer/timer.service';
import { TaskService } from '../../../shared/services/task/task.service';
import Task from '../../../shared/interfaces/task.interface';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import User from '../../../shared/interfaces/user.interface';

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

  constructor(private timerService: TimerService,
              public taskService: TaskService,
              public settingsService: SettingsService,
              private auth: AuthService) {}

  ngOnInit() {
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.auth.user$.subscribe(user => this.currentUser = user);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
    this.taskService.getTasks$().subscribe(tasks => {
      tasks = tasks ? tasks : [];
      this.currentTask = tasks.filter(task => !task.completed).sort(this.taskService.compareOrder).pop();
    });
  }

  completeTask(task: Task): Promise<void> {
    task.completed = !task.completed;
    task.dateCompleted = task.completed ? new Date() : null;
    return this.taskService.updateTask(this.currentUser.uid, task);
  }

}

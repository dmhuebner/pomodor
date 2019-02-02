import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../shared/services/timer/timer.service';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { TaskService } from '../../../shared/services/task/task.service';
import Task from '../../../shared/interfaces/task.interface';

@Component({
  selector: 'pm-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {

  timerLengthInSeconds: number;
  breakLengthInSeconds: number;
  timerBumperLengthInMinutes: number;
  onBreak = false;
  timerOn = false;
  currentTask: Task;

  constructor(private timerService: TimerService,
              private settingsService: SettingsService,
              public taskService: TaskService) {}

  ngOnInit() {
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
    this.taskService.getTasks$().subscribe(tasks => {
      this.currentTask = tasks.filter(task => !task.completed).sort(this.taskService.compareOrder).pop();
    });
    this.timerLengthInSeconds = this.settingsService.getTimerLength();
    this.breakLengthInSeconds = this.settingsService.getBreakLength();
    this.timerBumperLengthInMinutes = this.settingsService.getBumperLengthInMinutes();
  }

}

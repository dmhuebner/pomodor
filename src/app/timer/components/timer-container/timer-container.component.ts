import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../shared/services/timer/timer.service';
import { TaskService } from '../../../shared/services/task/task.service';
import Task from '../../../shared/interfaces/task.interface';

@Component({
  selector: 'pm-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {

  onBreak = false;
  timerOn = false;
  currentTask: Task;

  constructor(private timerService: TimerService,
              public taskService: TaskService) {}

  ngOnInit() {
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
    this.taskService.getTasks$().subscribe(tasks => {
      tasks = tasks ? tasks : [];
      this.currentTask = tasks.filter(task => !task.completed).sort(this.taskService.compareOrder).pop();
    });
  }

}

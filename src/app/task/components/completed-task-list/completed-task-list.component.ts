import { Component, Input, OnInit } from '@angular/core';
import Task from '../../../shared/interfaces/task.interface';

@Component({
  selector: 'pm-completed-task-list',
  templateUrl: './completed-task-list.component.html',
  styleUrls: ['./completed-task-list.component.scss']
})
export class CompletedTaskListComponent implements OnInit {

  @Input() completedTasksList: Task[];

  constructor() { }

  ngOnInit() {
  }

}

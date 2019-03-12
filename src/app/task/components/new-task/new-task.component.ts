import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import Task from '../../interfaces/task.interface';

@Component({
  selector: 'pm-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();

  newTaskDesc: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  onAddTask(): void {
    this.taskAdded.emit(this.newTaskDesc.value);
    this.newTaskDesc = new FormControl('');
  }

}

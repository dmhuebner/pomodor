import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import TaskList from '../../interfaces/taskList.interface';

@Component({
  selector: 'pm-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.scss']
})
export class TaskListHeaderComponent implements OnInit {

  @Input() taskList: TaskList;
  @Input() allTasksInListAreComplete: boolean;
  @Input() manageListActions: boolean;

  @Output() taskListDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() taskListUpdated: EventEmitter<TaskList> = new EventEmitter<TaskList>();
  @Output() taskListActivated: EventEmitter<TaskList> = new EventEmitter<TaskList>();

  taskListEditModeRef: string[] = [];

  ngOnInit() {
  }

  deleteEmptyTaskList(): void {
    this.taskListDeleted.emit(true);
  }

  toggleTaskListOpen(): void {
    if (this.manageListActions) {
      this.taskList.open = !this.taskList.open;

      // Delay event from firing to ensure animations finish before being interrupted by new data
      setTimeout(() => {
        this.taskListUpdated.emit(this.taskList);
      }, 500);
    }
  }

  toggleTaskListEditMode(taskList: TaskList): void {
    if (this.taskListEditModeRef.includes(taskList.id)) {
      this.taskListEditModeRef.splice(this.taskListEditModeRef.indexOf(taskList.id), 1);
      this.taskListUpdated.emit(taskList);
    } else {
      this.taskListEditModeRef.push(taskList.id);
    }
  }

  taskListIsInEditMode(taskList: TaskList): boolean {
    return taskList ? this.taskListEditModeRef.includes(taskList.id) : false;
  }

  activateTaskList(taskList: TaskList): void {
    this.taskListActivated.emit(taskList);
  }

}

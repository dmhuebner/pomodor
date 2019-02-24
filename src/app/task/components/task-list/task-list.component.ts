import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import Task from '../../../shared/interfaces/task.interface';
import User from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'pm-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasksList: Task[];
  @Input() currentUser: User;
  @Input() deviceIsMobile: boolean;

  @Output() taskCompletionChanged: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() dragEnded: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() taskDeleted: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() taskUpdated: EventEmitter<Task> = new EventEmitter<Task>();

  // TODO make interface for tasksInEditMode
  tasksInEditMode: object = {};

  constructor() { }

  ngOnInit(): void {
  }

  onCompleteTask(task: Task): void {
    this.taskCompletionChanged.emit(task);
  }

  drop(event: CdkDragDrop<Task[]>): void {
    moveItemInArray(this.tasksList, event.previousIndex, event.currentIndex);
  }

  onDragEnded(): void {
    this.dragEnded.emit(true);
  }

  toggleEditMode(task: Task): void {
    if (this.tasksInEditMode.hasOwnProperty(task.id)) {
      delete this.tasksInEditMode[task.id];

      if (!task.description) {
        this.taskDeleted.emit(task);
      } else {
        this.taskUpdated.emit(task);
      }
    } else {
      this.tasksInEditMode[task.id] = task;
    }
  }

  taskIsInEditMode(task: Task): boolean {
    return task ? this.tasksInEditMode.hasOwnProperty(task.id) : false;
  }

}

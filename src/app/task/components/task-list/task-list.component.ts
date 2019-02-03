import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import Task from '../../../shared/interfaces/task.interface';
import User from '../../../shared/interfaces/user.interface';
import { TaskService } from '../../../shared/services/task/task.service';

@Component({
  selector: 'pm-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasksList: Task[];
  @Input() currentUser: User;

  @Output() taskAdded: EventEmitter<Object> = new EventEmitter<Object>();

  newTask: FormControl = new FormControl('');
  // TODO make interface for tasksInEditMode
  tasksInEditMode: object = {};

  constructor(private afs: AngularFirestore,
              private taskService: TaskService) { }

  ngOnInit() {
  }

  completeTask(task: Task): Promise<void> {
    task.completed = !task.completed;
    task.dateCompleted = task.completed ? new Date() : null;
    return this.taskService.updateTask(this.currentUser.uid, task);
  }

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasksList, event.previousIndex, event.currentIndex);
  }

  onAddTask() {
    const eventPayload = {
      userUid: this.currentUser.uid,
      newTask: this.newTask.value
    };

    this.taskAdded.emit(eventPayload);
    this.newTask = new FormControl('');
  }

  onDragEnded(event): void {
    // The timeout makes sure that the list has finished reordering before we start updating the order prop of each task doc in the db.
    setTimeout(() => {
      this.tasksList.forEach((task, index) => {
        const userTasksRef: AngularFirestoreDocument = this.afs.doc(`tasks/${this.currentUser.uid}/tasks/${task.id}`);
        const updatedTask: Task = {...task, order: index};

        userTasksRef.set(updatedTask);
      });
    });
  }

  toggleEditMode(task: Task) {
    if (this.tasksInEditMode.hasOwnProperty(task.id)) {
      delete this.tasksInEditMode[task.id];

      if (!task.description) {
        this.taskService.deleteTask(this.currentUser.uid, task.id);
      } else {
        this.taskService.updateTask(this.currentUser.uid, task);
      }
    } else {
      this.tasksInEditMode[task.id] = task;
    }
  }

  taskIsInEditMode(task) {
    return this.tasksInEditMode.hasOwnProperty(task.id);
  }

}

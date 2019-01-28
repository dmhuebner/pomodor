import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import Task from '../../../shared/interfaces/task.interface';
import User from '../../../shared/interfaces/user.interface';
import { TaskService } from '../../../shared/services/task.service';

@Component({
  selector: 'pm-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasksList: Task[];

  @Output() taskAdded: EventEmitter<Object> = new EventEmitter<Object>();

  newTask: FormControl = new FormControl('');
  currentUser: User;

  constructor(private auth: AuthService,
              private afs: AngularFirestore,
              private taskService: TaskService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.currentUser = user);
  }

  completeTask(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(this.currentUser.uid, task);
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

  onDragEnded(event) {
    // TODO fix this update process - Right now there can be some visual stuttering because the observable is updating
    //  when the order of each task is updated below
    setTimeout(() => {
      this.tasksList.forEach((task, index) => {
        const userTasksRef: AngularFirestoreDocument = this.afs.doc(`tasks/${this.currentUser.uid}/tasks/${task.id}`);
        const updatedTask: Task = {...task};
        updatedTask.order = index;

        userTasksRef.set(updatedTask);
      });
    }, 300);
  }

}

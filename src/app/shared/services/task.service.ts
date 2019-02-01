import { Injectable, OnInit } from '@angular/core';
import User from '../interfaces/user.interface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import Task from '../interfaces/task.interface';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap, debounceTime } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {

  tasksCollection: AngularFirestoreCollection<Task>;
  currentUser: User;

  constructor(private afs: AngularFirestore,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.currentUser = user);
  }

  getTasks$(): Observable<Task[]> {
    return this.auth.user$.pipe(
      switchMap(user => {
        if (user) {
          this.tasksCollection = this.afs.collection(`tasks/${user.uid}/tasks/`, ref => ref.orderBy('order'));
          // We debounce the valueChanges observable to make sure there is no visual skipping when reordering tasks
          return this.tasksCollection.valueChanges().pipe(debounceTime(50));
          // TODO should we transform the dateCompleted from a Timestamp to a Date here?
        } else {
          return of(null);
        }
      })
    );
  }

  postNewTask(userUid: string, newTask: string, order: number): Promise<void> {
    const newTaskId: string = this.afs.createId();
    const userTasksRef: AngularFirestoreDocument = this.afs.doc(`tasks/${userUid}/tasks/${newTaskId}`);

    return userTasksRef.set({
      description: newTask,
      completed: false,
      dateCreated: new Date(),
      dateCompleted: null,
      order: order,
      id: newTaskId
    });
  }

  updateTask(userUid: string, task: Task): Promise<void> {
    const userTasksRef: AngularFirestoreDocument = this.afs.doc(`tasks/${userUid}/tasks/${task.id}`);
    const updatedTask = {...task};

    return userTasksRef.set(updatedTask);
  }

  deleteTask(userUid: string, taskId: string): Promise<void> {
    const userTasksRef: AngularFirestoreDocument = this.afs.doc(`tasks/${userUid}/tasks/${taskId}`);
    return userTasksRef.delete();
  }

  // Returns true if the task should be placed in the completedTasks list
  checkTaskCompleted(task: Task): boolean {
    // Check if the soft expiration date for the task is before the time that this function is called
    return moment(task.dateCompleted).add(15, 'minutes').isBefore(new Date());
  }

  taskIsExpired(task: Task): boolean {
    return moment(task.dateCompleted).add(7, 'days').isBefore(new Date());
  }

  // Can be used as compare function in Array.sort for completedTaskList
  compareDateCompleted(taskA, taskB) {
    if (taskA.dateCompleted < taskB.dateCompleted) {
      return 1;
    }
    if (taskA.dateCompleted > taskB.dateCompleted) {
      return -1;
    }
    return 0;
  }

  compareOrder(taskA, taskB) {
    if (taskA.order < taskB.order) {
      return 1;
    }
    if (taskA.order > taskB.order) {
      return -1;
    }
    return 0;
  }
}

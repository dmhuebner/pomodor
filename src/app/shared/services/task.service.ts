import { Injectable, OnInit } from '@angular/core';
import User from '../interfaces/user.interface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import Task from '../interfaces/task.interface';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {

  tasksCollection: AngularFirestoreCollection<Task>;
  tasks$: Observable<Task[]>;
  currentUser: User;

  constructor(private afs: AngularFirestore,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.currentUser = user);
  }

  getTasks(): Observable<Task[]> {
    return this.auth.user$.pipe(
      switchMap(user => {
        if (user) {
          this.tasksCollection = this.afs.collection(`tasks/${user.uid}/tasks/`, ref => ref.orderBy('order'));
          return this.tasksCollection.valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  postNewTask(userUid: 'string', newTask: string, order: number): void {
    const newTaskId: string = this.afs.createId();
    const userTasksRef: AngularFirestoreDocument = this.afs.doc(`tasks/${userUid}/tasks/${newTaskId}`);

    userTasksRef.set({
      description: newTask,
      completed: false,
      dateCreated: new Date(),
      order: order,
      id: newTaskId
    });
  }

  updateTask(userUid: string, task: Task) {
    const userTasksRef: AngularFirestoreDocument = this.afs.doc(`tasks/${userUid}/tasks/${task.id}`);
    const updatedTask = {...task};

    userTasksRef.set(updatedTask);
  }
}

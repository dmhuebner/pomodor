import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { TaskService } from '../../../shared/services/task/task.service';
import Task from '../../../shared/interfaces/task.interface';
import User from '../../../shared/interfaces/user.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pm-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss']
})
export class TaskListContainerComponent implements OnInit {

  tasksList: Task[] = [];
  completedTasksList: Task[] = [];
  currentUser: User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private afs: AngularFirestore,
              private auth: AuthService,
              private taskService: TaskService,
              private spinner: NgxSpinnerService,
              public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.spinner.show();
    this.auth.user$.subscribe(user => this.currentUser = user);
    this.taskService.getTasks$().subscribe(tasks => {
      tasks = tasks ? tasks : [];

      this.tasksList = tasks.filter(task => {
        if (task.dateCompleted) {
          // Transform dateCompleted into a date if there is a toDate function (if its a Timestamp) - We might wanna change this...
          task.dateCompleted = typeof task.dateCompleted.toDate ? task.dateCompleted.toDate() : task.dateCompleted;
          return !this.taskService.checkTaskCompleted(task);
        } else {
          return true;
        }
      });

      this.completedTasksList = tasks.filter(task => {
        if (task.dateCompleted) {
          if (this.taskService.taskIsExpired(task)) {
            this.taskService.deleteTask(this.currentUser.uid, task.id);
            return false;
          } else {
            return this.taskService.checkTaskCompleted(task);
          }
        }
      }).sort(this.taskService.compareDateCompleted);

      this.spinner.hide();
    });
  }

  onNewTaskAdded(event): Promise<void> {
    return this.taskService.postNewTask(this.currentUser.uid, event, this.tasksList.length + 1);
  }

  onTaskUpdated(task: Task) {
    return this.taskService.updateTask(this.currentUser.uid, task);
  }

  onTaskDeleted(task: Task) {
    return this.taskService.deleteTask(this.currentUser.uid, task.id);
  }

  toggleTaskComplete(task: Task): Promise<void> {
    task.completed = !task.completed;
    task.dateCompleted = task.completed ? new Date() : null;
    return this.taskService.updateTask(this.currentUser.uid, task);
  }

  onDragEnded(): void {
    // The timeout makes sure that the list has finished reordering before we start updating the order prop of each task doc in the db.
    setTimeout(() => {
      this.tasksList.forEach((task, index) => {
        const userTasksRef: AngularFirestoreDocument = this.afs.doc(`tasks/${this.currentUser.uid}/tasks/${task.id}`);
        const updatedTask: Task = {...task, order: index};

        userTasksRef.set(updatedTask);
      });
    });
  }
}

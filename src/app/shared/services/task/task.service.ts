import { Injectable, OnInit } from '@angular/core';
import User from '../../interfaces/user.interface';
import Task from '../../interfaces/task.interface';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { switchMap, debounceTime } from 'rxjs/operators';
import * as moment from 'moment';
import { DataService } from '../data/data.service';
import {SettingsService} from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {

  currentUser: User;

  constructor(private auth: AuthService,
              private dataService: DataService<Task>,
              private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.currentUser = user);
  }

  getTasks$(): Observable<Task[]> {
    return this.auth.user$.pipe(
      switchMap(user => {
        if (user) {
          // We debounce the valueChanges observable to make sure there is no visual skipping when reordering tasks
          return this.dataService.getCollection$(`tasks/${user.uid}/tasks/`, 'order')
            .pipe(debounceTime(50));
          // TODO should we transform the dateCompleted from a Timestamp to a Date here?
        } else {
          return of(null);
        }
      })
    );
  }

  postNewTask(userUid: string, newTaskDesc: string, order: number): Promise<void> {
    const payload: Task = {
      description: newTaskDesc,
      completed: false,
      dateCreated: new Date(),
      dateCompleted: null,
      order: order,
      id: null
    };

    return this.dataService.postNewItem(`tasks/${userUid}/tasks/`, payload);
  }

  updateTask(userUid: string, task: Task): Promise<void> {
    return this.dataService.updateItem(`tasks/${userUid}/tasks/${task.id}`, task);
  }

  deleteTask(userUid: string, taskId: string): Promise<void> {
    return this.dataService.deleteItem(`tasks/${userUid}/tasks/${taskId}`);
  }

  // Returns true if the task should be placed in the completedTasks list
  checkTaskCompleted(task: Task): boolean {
    const softExpirationInMin = this.settingsService.getMoveCompletedTaskToCompletedListTimeInMin();
    // Check if the soft expiration date for the task is before the time that this function is called
    return moment(task.dateCompleted).add(softExpirationInMin, 'minutes').isBefore(new Date());
  }

  taskIsExpired(task: Task): boolean {
    const hardExpirationInMin = this.settingsService.getCompletedTaskExpirationInDays();
    return moment(task.dateCompleted).add(hardExpirationInMin, 'days').isBefore(new Date());
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

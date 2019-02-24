import { Injectable, OnInit } from '@angular/core';
import User from '../../interfaces/user.interface';
import Task from '../../interfaces/task.interface';
import { AuthService } from '../auth/auth.service';
import * as moment from 'moment';
import { DataService } from '../data/data.service';
import {SettingsService} from '../settings/settings.service';
import TaskList from '../../interfaces/taskList.interface';

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

  postNewTask(userUid: string, taskList: TaskList, newTaskDesc: string): Promise<void> {
    const payload: Task = {
      description: newTaskDesc,
      completed: false,
      dateCreated: new Date().toISOString(),
      dateCompleted: null,
      id: this.dataService.createId()
    };

    taskList.tasks ? taskList.tasks.push(payload) : taskList.tasks = [payload];

    return this.dataService.updateItem(`taskLists/${userUid}/${taskList.id}/tasks/`, taskList.tasks);
  }

  updateTask(userUid: string, taskList: TaskList, task: Task): Promise<void> {
    const taskIndex = taskList.tasks.findIndex(t => t.id === task.id);
    return this.dataService.updateItem(`taskLists/${userUid}/${taskList.id}/tasks/${taskIndex}`, task);
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
}

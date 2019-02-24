import { Injectable, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import TaskList from '../../interfaces/taskList.interface';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskListService implements OnInit {

  constructor(private dataService: DataService<TaskList>,
              private auth: AuthService) { }


  ngOnInit(): void {
  }

  getTaskLists$(): Observable<TaskList[]> {
    return this.auth.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.dataService.getCollection$(`taskLists/${user.uid}/`);
        } else {
          return of(null);
        }
      })
    );
  }

  updateTaskList(userUid: string, taskList: TaskList): Promise<void> {
    return this.dataService.updateItem(`taskLists/${userUid}/${taskList.id}/`, taskList);
  }

  createTaskList(userUid: string, taskListName: string, activate: boolean = false): Promise<string> {
    const payload: TaskList = {
      id: null,
      listName: taskListName,
      active: activate,
      tasks: [],
      open: true
    };

    // TODO the taskList.open property can be defaulted in the settings at some point

    return this.dataService.postNewItem(`taskLists/${userUid}/`, payload);
  }

  getActiveTaskList(taskLists: TaskList[]): TaskList {
    return taskLists.find(taskList => taskList.active);
  }

  deleteTaskList(userUid: string, taskListId: string) {
    return this.dataService.deleteItem(`taskLists/${userUid}/${taskListId}`);
  }

  compareListName(a, b) {
    if (a.listName.toLowerCase() < b.listName.toLowerCase()) {
      return -1;
    }
    if (a.listName.toLowerCase() > b.listName.toLowerCase()) {
      return 1;
    }
    return 0;
  }
}

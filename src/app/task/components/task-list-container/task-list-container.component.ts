import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../../shared/services/auth.service';
import { TaskService } from '../../../shared/services/task.service';
import Task from '../../../shared/interfaces/task.interface';
import User from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'pm-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss']
})
export class TaskListContainerComponent implements OnInit {

  taskList: Task[] = [];
  completedTaskList: Task[] = [];
  currentUser: User;

  constructor(private afs: AngularFirestore,
              private auth: AuthService,
              private taskService: TaskService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.currentUser = user);
    this.taskService.getTasks().subscribe(tasks => {
      tasks = tasks ? tasks : [];

      this.taskList = tasks.filter(task => {
        if (task.dateCompleted) {
          // Transform dateCompleted into a date if there is a toDate function (if its a Timestamp) - We might wanna change this...
          task.dateCompleted = typeof task.dateCompleted.toDate ? task.dateCompleted.toDate() : task.dateCompleted;
          return !this.taskService.checkTaskCompleted(task);
        } else {
          return true;
        }
      });

      this.completedTaskList = tasks.filter(task => {
        if (task.dateCompleted) {
          if (this.taskService.taskIsExpired(task)) {
            this.taskService.deleteTask(this.currentUser.uid, task.id);
            return false;
          } else {
            return this.taskService.checkTaskCompleted(task);
          }
        }
      }).sort(this.taskService.compareDateCompleted);
    });
  }

  onNewTaskAdded(event): void {
    this.taskService.postNewTask(event.userUid, event.newTask, this.taskList.length);
  }


}

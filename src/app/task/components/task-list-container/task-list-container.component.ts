import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../../shared/services/auth.service';
import { TaskService } from '../../../shared/services/task.service';
import Task from '../../../shared/interfaces/task.interface';

@Component({
  selector: 'pm-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss']
})
export class TaskListContainerComponent implements OnInit {

  taskList: Task[] = [];
  completedTaskList: Task[] = [];

  constructor(private afs: AngularFirestore,
              private auth: AuthService,
              private taskService: TaskService) { }

  ngOnInit() {
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
          // TODO Add logic to delete completed task after certain amount of time
          return this.taskService.checkTaskCompleted(task);
        }
      }).sort(this.taskService.compareDateCompleted);
    });
  }

  onNewTaskAdded(event): void {
    this.taskService.postNewTask(event.userUid, event.newTask, this.taskList.length);
  }


}

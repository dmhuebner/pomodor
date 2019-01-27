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

  taskList: Task[];

  constructor(private afs: AngularFirestore,
              private auth: AuthService,
              private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  onNewTaskAdded(event): void {
    this.taskService.postNewTask(event.userUid, event.newTask, this.taskList.length);
  }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListContainerComponent } from './components/task-list-container/task-list-container.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { CompletedTaskListComponent } from './components/completed-task-list/completed-task-list.component';
import { ActiveTaskListPipe } from './pipes/active-task-list.pipe';
import { TaskListHeaderComponent } from './components/task-list-header/task-list-header.component';

// TODO make sure SharedModule is needed below

@NgModule({
  declarations: [
    TaskListContainerComponent,
    TaskListComponent,
    NewTaskComponent,
    CompletedTaskListComponent,
    ActiveTaskListPipe,
    TaskListHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    DragDropModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class TaskModule { }

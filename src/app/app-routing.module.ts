import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { TimerContainerComponent } from './timer/components/timer-container/timer-container.component';
import { SettingsComponent } from './settings/components/settings-container/settings.component';
import { TaskListContainerComponent } from './task/components/task-list-container/task-list-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'timer', component: TimerContainerComponent },
  { path: 'tasks', component: TaskListContainerComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

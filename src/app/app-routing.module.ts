import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '@shared/components';
import { TimerContainerComponent } from '@timer/containers';
import { SettingsComponent } from '@settings/containers';
import { TaskListContainerComponent } from '@task/containers';
import { LoggedInGuard } from '@shared/guards';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'timer', component: TimerContainerComponent },
  { path: 'tasks', component: TaskListContainerComponent, canActivate: [LoggedInGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [LoggedInGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

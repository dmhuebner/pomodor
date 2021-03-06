import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './components/timer/timer.component';
import { TimerContainerComponent } from './containers/timer-container/timer-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@shared/shared.module';
import { TimerHistoryComponent } from './components/timer-history/timer-history.component';
import { TimerHistoryContainerComponent } from './containers/timer-history-container/timer-history-container.component';

@NgModule({
  declarations: [
    TimerComponent,
    TimerContainerComponent,
    TimerHistoryComponent,
    TimerHistoryContainerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    SharedModule
  ],
  exports: [
    TimerContainerComponent,
    TimerComponent
  ],
  providers: [],
})
export class TimerModule { }

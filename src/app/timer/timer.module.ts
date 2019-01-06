import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './components/timer/timer.component';
import { TimerContainerComponent } from './components/timer-container/timer-container.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { TimerService } from './timer.service';
import { TimerHistoryComponent } from './components/timer-history/timer-history.component';
import { TimerHistoryContainerComponent } from './components/timer-history-container/timer-history-container.component';

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
    SharedModule
  ],
  exports: [
    TimerContainerComponent,
    TimerComponent
  ],
  providers: [
    TimerService
  ],
})
export class TimerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './components/timer/timer.component';
import { TimerContainerComponent } from './components/timer-container/timer-container.component';
import { MatButtonModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { TimerService } from './timer.service';

@NgModule({
  declarations: [
    TimerComponent,
    TimerContainerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
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

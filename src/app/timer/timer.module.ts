import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './components/timer/timer.component';
import { TimerContainerComponent } from './components/timer-container/timer-container.component';

@NgModule({
  declarations: [
    TimerComponent,
    TimerContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimerContainerComponent,
    TimerComponent
  ]
})
export class TimerModule { }

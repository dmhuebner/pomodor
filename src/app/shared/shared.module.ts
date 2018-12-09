import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatIconModule } from '@angular/material';
import { TimerPipe } from './pipes/timer.pipe';

@NgModule({
  declarations: [NotFoundComponent, TimerPipe],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    TimerPipe
  ]
})
export class SharedModule { }

import { Component, OnInit } from '@angular/core';
import {TimerService} from '../../timer.service';

@Component({
  selector: 'pm-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {

  onBreak = false;
  timerOn = false;

  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
  }

}

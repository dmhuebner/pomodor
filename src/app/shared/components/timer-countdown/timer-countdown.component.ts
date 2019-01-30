import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'pm-timer-countdown',
  templateUrl: './timer-countdown.component.html',
  styleUrls: ['./timer-countdown.component.scss']
})
export class TimerCountdownComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit() {
  }

}

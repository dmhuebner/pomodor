import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../timer.service';

@Component({
  selector: 'pm-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private taskTimeInSeconds = 5;
  private breakTimeInSeconds = 3;
  workingTime = this.taskTimeInSeconds;
  breakTime = this.breakTimeInSeconds;
  timeLeft: number = this.workingTime;
  timerInterval;
  onBreak = false;
  timerOn = false;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    // Subscribe to onBreak$ subject observable and set value to this.onBreak
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
    this.onResetTimer();
  }

  onStartTime() {
    this.timerService.setTimerOn(true);
    this.timeLeft--;
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft < 0) {
        if (this.timerInterval) {
          clearInterval(this.timerInterval);
        }
        this.endTimer();
        this.timerService.setOnBreak(!this.onBreak);
        this.setTimeLeft();
      }
    }, 1000);
  }

  onResetTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.endTimer();
  }

  onEndBreak() {
    this.timerService.setOnBreak(false);
    this.onResetTimer();
  }

  private endTimer() {
    this.timerService.setTimerOn(false);
    this.workingTime = this.taskTimeInSeconds;
    this.timeLeft = this.onBreak ? this.breakTime : this.workingTime;
  }

  private setTimeLeft() {
    this.timeLeft = this.onBreak ? this.breakTime : this.workingTime;
  }

}

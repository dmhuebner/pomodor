import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private taskTimeInSeconds = 5;
  workingTime = this.taskTimeInSeconds;
  timeLeft: number = this.workingTime;
  timeStarted = false;
  timerInterval;

  constructor() { }

  ngOnInit() {
    this.onResetTimer();
  }

  onStartTime() {
    this.timeLeft--;
    this.timeStarted = true;
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft < 0) {
        this.onResetTimer();
      }
    }, 1000);
  }

  onResetTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.timeStarted = false;
    this.workingTime = this.taskTimeInSeconds;
    this.timeLeft = this.workingTime;
  }

}

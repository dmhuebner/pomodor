import {Component, Input, OnInit} from '@angular/core';
import { TimerService } from '../../timer.service';
import { CompletedTimer } from '../../interfaces/CompletedTimer';
import { SettingsService } from '../../../shared/services/settings.service';

@Component({
  selector: 'pm-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input()
  timerLength: number;

  @Input()
  breakLength: number;

  @Input()
  timerBumperLength: number;

  timeLeft: number = this.timerLength;
  timerInterval;
  onBreak = false;
  timerOn = false;
  currentTimer: CompletedTimer = {
    completed: false,
    completedWithBreak: false
  };
  showTimerBumpers = false;

  constructor(private timerService: TimerService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    // Subscribe to onBreak$ subject observable and set value to this.onBreak
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
    this.showTimerBumpers = this.settingsService.getUseTimerBumpers();
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
        this.currentTimer.completed = true;
        console.log(this.currentTimer);
        if (this.onBreak) {
          this.currentTimer.completedWithBreak = true;
          console.log(this.currentTimer);
          this.timerService.addCompletedTimer(this.currentTimer);
          this.currentTimer = {
            completed: false,
            completedWithBreak: false
          };
        }
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
    if (this.onBreak) {
      this.timerService.addCompletedTimer(this.currentTimer);
    }

    this.timerService.setOnBreak(false);
    this.onResetTimer();
  }

  bumpTimerBack() {
    this.timeLeft -= (this.timerBumperLength * 60);
  }

  bumpTimerForward() {
    this.timeLeft += (this.timerBumperLength * 60);
  }

  private endTimer() {
    this.timerService.setTimerOn(false);
    this.timeLeft = this.onBreak ? this.breakLength : this.timerLength;
  }

  private setTimeLeft() {
    this.timeLeft = this.onBreak ? this.breakLength : this.timerLength;
  }

}

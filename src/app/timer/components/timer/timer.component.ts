import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../shared/services/timer.service';
import { CompletedTimer } from '../../../shared/interfaces/CompletedTimer.interface';
import { SettingsService } from '../../../shared/services/settings.service';

@Component({
  selector: 'pm-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  onBreak = false;
  timerOn = false;
  showTimerBumpers = false;
  timerBumperLength: number = this.settingsService.getBumperLengthInMinutes();

  currentTimer: CompletedTimer = {
    completed: false,
    completedWithBreak: false
  };

  constructor(public timerService: TimerService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    // Subscribe to onBreak$ subject observable and set value to this.onBreak
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
    this.showTimerBumpers = this.settingsService.getUseTimerBumpers();
  }

  onStartTime() {
    this.timerService.startTimer();
  }

  onResetTimer() {
    this.timerService.resetTimer();
  }

  onEndBreak() {
    // TODO should this be in a service? Probably...
    if (this.onBreak) {
      this.timerService.addCompletedTimer(this.currentTimer);
    }

    this.timerService.endBreak();
  }

  bumpTimerBack() {
    this.timerService.bumpTimerBack();
  }

  bumpTimerForward() {
    this.timerService.bumpTimerForward();
  }

}

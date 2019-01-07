import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../timer.service';
import { SettingsService } from '../../../shared/services/settings.service';

@Component({
  selector: 'pm-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {

  timerLengthInSeconds: number;
  breakLengthInSeconds: number;
  timerBumperLengthInMinutes: number;
  onBreak = false;
  timerOn = false;

  constructor(private timerService: TimerService,
              private settingsService: SettingsService) {}

  ngOnInit() {
    this.timerService.onBreak$.subscribe(val => this.onBreak = val);
    this.timerService.timerOn$.subscribe(val => this.timerOn = val);
    this.timerLengthInSeconds = this.settingsService.getTimerLength();
    this.breakLengthInSeconds = this.settingsService.getBreakLength();
    this.timerBumperLengthInMinutes = this.settingsService.getBumperLengthInMinutes();
  }

}

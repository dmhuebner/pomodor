import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/services/settings/settings.service';
import { FormControl } from '@angular/forms';
import { TimerService } from '../shared/services/timer/timer.service';

@Component({
  selector: 'pm-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  timerLength: FormControl = new FormControl(this.settingsService.getTimerLength() / 60);
  breakLength: FormControl = new FormControl(this.settingsService.getBreakLength() / 60);
  bumperLengthInMinutes: FormControl = new FormControl(this.settingsService.getBumperLengthInMinutes());
  useTimerBumpers: FormControl = new FormControl(this.settingsService.getUseTimerBumpers());

  constructor(private settingsService: SettingsService,
              private timerService: TimerService) { }

  ngOnInit() {
  }

  onSaveSettings() {
    this.settingsService.setTimerLengthInSeconds(this.timerLength.value);
    this.settingsService.setBreakLengthInSeconds(this.breakLength.value);
    this.settingsService.setBumperLengthInMinutes(this.bumperLengthInMinutes.value);
    this.settingsService.setUseTimerBumpers(this.useTimerBumpers.value);
    this.timerService.resetTimer();
  }

}

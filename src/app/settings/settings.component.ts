import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/services/settings.service';
import { FormControl } from '@angular/forms';

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

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
  }

  onSaveSettings() {
    this.settingsService.setTimerLengthInSeconds(this.timerLength.value);
    this.settingsService.setBreakLengthInSeconds(this.breakLength.value);
    this.settingsService.setBumperLengthInMinutes(this.bumperLengthInMinutes.value);
    this.settingsService.setUseTimerBumpers(this.useTimerBumpers.value);
  }

}

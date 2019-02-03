import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { FormControl } from '@angular/forms';
import { TimerService } from '../../../shared/services/timer/timer.service';
import { Settings } from '../../../shared/interfaces/settings.interface';
import User from '../../../shared/interfaces/user.interface';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'pm-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  // TODO Type of settings form should be set..
  currentSettings = {
    timerLength: new FormControl(this.settingsService.getTimerLength() / 60),
    breakLength: new FormControl(this.settingsService.getBreakLength() / 60),
    bumperLengthInMinutes: new FormControl(this.settingsService.getBumperLengthInMinutes()),
    useTimerBumpers: new FormControl(this.settingsService.getUseTimerBumpers())
  };

  currentUser: User;

  constructor(private settingsService: SettingsService,
              private timerService: TimerService,
              private auth: AuthService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.auth.user$.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.settingsService.currentSettings$.subscribe(settings => {
          this.updateSettingsForm(settings);
          this.spinner.hide();
        });
      } else {
        this.currentUser = null;
        this.spinner.hide();
      }
    });
  }

  async onSaveSettings(): Promise<void> {
    await this.settingsService.updateUserSettings({
      timerLength: this.currentSettings.timerLength.value,
      breakLength: this.currentSettings.breakLength.value,
      bumperLengthInMinutes: this.currentSettings.bumperLengthInMinutes.value,
      useTimerBumpers: this.currentSettings.useTimerBumpers.value,
      tasksLinkedToTimer: true
    }, this.currentUser.uid);
    return this.timerService.resetTimer();
  }

  private updateSettingsForm(settings: Settings) {
    for (const setting in settings) {
      if (settings.hasOwnProperty(setting)) {
        this.currentSettings[setting] = new FormControl((settings[setting]));
      }
    }
  }

}

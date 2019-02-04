import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { FormControl } from '@angular/forms';
import { TimerService } from '../../../shared/services/timer/timer.service';
import Settings from '../../../shared/interfaces/settings.interface';
import User from '../../../shared/interfaces/user.interface';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

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
    useTimerBumpers: new FormControl(this.settingsService.getUseTimerBumpers()),
    tasksLinkedToTimer: new FormControl(this.settingsService.getTasksLinkedToTimer()),
    moveCompletedTaskToCompletedListTimeInMin: new FormControl(this.settingsService.getMoveCompletedTaskToCompletedListTimeInMin()),
    completedTaskExpirationInDays: new FormControl(this.settingsService.getCompletedTaskExpirationInDays()),
  };

  currentUser: User;
  loading = false;

  constructor(private settingsService: SettingsService,
              private timerService: TimerService,
              private auth: AuthService,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.spinner.spinnerObservable.subscribe(loading => this.loading = loading);
    this.spinner.show();
    // TODO fix this nested subscribe
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
    const updatedUserSettings: Settings = this.generateUserSettingsRequestFromForm();
    await this.settingsService.updateUserSettings(updatedUserSettings, this.currentUser.uid);
    this.toastr.success(null, 'Settings Saved!');
    return this.timerService.resetTimer();
  }

  async onRestoreDefaults(): Promise<void> {
    await this.settingsService.setCurrentSettings(this.settingsService.defaultSettings);
    return this.onSaveSettings();
  }

  shouldDisableSaveButton() {
    return !this.currentSettings.timerLength.value
      || !this.currentSettings.breakLength.value
      || !this.currentSettings.moveCompletedTaskToCompletedListTimeInMin.value
      || !this.currentSettings.completedTaskExpirationInDays.value
      || (this.currentSettings.useTimerBumpers.value && !this.currentSettings.bumperLengthInMinutes.value);
  }

  private updateSettingsForm(settings: Settings) {
    for (const setting in settings) {
      if (settings.hasOwnProperty(setting)) {
        this.currentSettings[setting] = new FormControl((settings[setting]));
      }
    }
  }

  private generateUserSettingsRequestFromForm(): Settings {
    const request = {...this.settingsService.currentSettings};
    for (const setting in this.currentSettings) {
      if (this.currentSettings.hasOwnProperty(setting)) {
        request[setting] = this.currentSettings[setting].value;
      }
    }

    return request;
  }

}

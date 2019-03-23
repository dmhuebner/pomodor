import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';
import { TimerService } from '@timer/services';
import Settings from '../../interfaces/settings.interface';
import User from '@shared/interfaces/user.interface';
import { AuthService } from '@shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pm-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  currentSettings: Settings;
  currentUser: User;
  loading = false;
  saveButtonDisabled = false;

  constructor(public settingsService: SettingsService,
              private timerService: TimerService,
              private auth: AuthService,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.spinner.spinnerObservable.subscribe(loading => this.loading = loading);
    this.spinner.show();
    this.auth.user$.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
        this.currentSettings = this.initializeSettingsForm();
      }

      this.spinner.hide();
    });
  }

  async onSaveSettings(settings: Settings): Promise<void> {
    await this.settingsService.updateUserSettings(settings, this.currentUser.uid);
    this.currentSettings = settings;
    await this.settingsService.setCurrentSettings(settings);
    this.toastr.success(null, 'Settings Saved!');
    return this.timerService.resetTimer();
  }

  async onRestoreDefaults(): Promise<void> {
    this.settingsService.setCurrentSettings(this.settingsService.defaultSettings);
    return this.onSaveSettings(this.settingsService.defaultSettings);
  }

  onFormValuesChanged(settingsForm: FormGroup): void {
    this.saveButtonDisabled = settingsForm.invalid;
  }

  private initializeSettingsForm() {
    return {
      timerLength: this.settingsService.getTimerLength() / 60,
      breakLength: this.settingsService.getBreakLength() / 60,
      bumperLengthInMinutes: this.settingsService.getBumperLengthInMinutes(),
      useTimerBumpers: this.settingsService.getUseTimerBumpers(),
      tasksLinkedToTimer: this.settingsService.getTasksLinkedToTimer(),
      moveCompletedTaskToCompletedListTimeInMin: this.settingsService.getMoveCompletedTaskToCompletedListTimeInMin(),
      completedTaskExpirationInDays: this.settingsService.getCompletedTaskExpirationInDays()
    };
  }

}

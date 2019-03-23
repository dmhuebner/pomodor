import {Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import Settings from '../../interfaces/settings.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pm-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit, OnChanges {

  @Input() currentSettings: Settings;

  @Output() submitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.settingsForm = this.populateSettingsForm(this.currentSettings);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.settingsForm = this.populateSettingsForm(changes.currentSettings.currentValue);

  }

  onSubmit(): void {
    if (this.settingsForm.valid) {
      this.submitted.emit(this.settingsForm);
    }
  }

  populateSettingsForm(settings: Settings): FormGroup {
    return this.fb.group({
      timerLength: [settings.timerLength, [Validators.required]],
      breakLength: [settings.breakLength, [Validators.required]],
      bumperLengthInMinutes: [settings.bumperLengthInMinutes, [Validators.min(1)]],
      useTimerBumpers: [settings.useTimerBumpers, [Validators.required]],
      tasksLinkedToTimer: [settings.tasksLinkedToTimer, [Validators.required]],
      moveCompletedTaskToCompletedListTimeInMin: [settings.moveCompletedTaskToCompletedListTimeInMin, [Validators.required]],
      completedTaskExpirationInDays: [settings.completedTaskExpirationInDays, [Validators.required]]
    });
  }
}

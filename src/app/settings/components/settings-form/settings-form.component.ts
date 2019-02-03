import { Component, Input, OnInit } from '@angular/core';
import Settings from '../../../shared/interfaces/settings.interface';

@Component({
  selector: 'pm-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit {

  @Input() currentSettings: Settings;
  @Input() shouldShowBumperLengthField: boolean;

  constructor() { }

  ngOnInit() {
  }

}

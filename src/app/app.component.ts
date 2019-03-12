import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services';
import { SettingsService } from '@settings/services';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.settingsService.getUserSettings$(user.uid).subscribe(settings => {
          if (settings) {
            this.settingsService.setCurrentSettings(settings);
          } else {
            this.settingsService.setCurrentSettings(this.settingsService.defaultSettings);
          }
        });
      } else {
        this.settingsService.setCurrentSettings(this.settingsService.defaultSettings);
      }
    });
  }
}

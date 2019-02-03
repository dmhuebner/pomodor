import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { Settings } from '../../interfaces/settings.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Defaults settings
  defaultSettings: Settings = {
    timerLength: 25,
    breakLength: 5,
    bumperLengthInMinutes: 2,
    useTimerBumpers: false,
    tasksLinkedToTimer: true
  };

  currentSettings: Settings = {...this.defaultSettings};

  currentSettingsSubject: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(this.currentSettings);
  currentSettings$: Observable<Settings> = this.currentSettingsSubject.asObservable();

  constructor(private dataService: DataService<Settings>) { }

  getUserSettings$(userUid: string): Observable<Settings> {
    return this.dataService.getItem$(`settings/${userUid}`);
  }

  getTimerLength(): number {
    return this.currentSettings ? this.currentSettings.timerLength * 60 : this.defaultSettings.timerLength * 60;
  }

  getBreakLength(): number {
    return this.currentSettings ? this.currentSettings.breakLength * 60 : this.defaultSettings.breakLength * 60;
  }

  getBumperLengthInMinutes(): number {
    return this.currentSettings ? this.currentSettings.bumperLengthInMinutes : this.defaultSettings.bumperLengthInMinutes;
  }

  getUseTimerBumpers(): boolean {
    return this.currentSettings ? this.currentSettings.useTimerBumpers : this.defaultSettings.useTimerBumpers;
  }

  updateUserSettings(newUserSettings: Settings, userUid: string): Promise<void> {
    return this.dataService.updateItem(`settings/${userUid}`, newUserSettings);
  }

  setCurrentSettings(settings: Settings) {
    for (const setting in settings) {
      if (settings.hasOwnProperty(setting)) {
        this.currentSettings[setting] = settings[setting];
      }
    }

    this.currentSettingsSubject.next(this.currentSettings);
  }
}

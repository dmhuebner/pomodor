import { Injectable } from '@angular/core';
import { DataService } from '@shared/services';
import Settings from '../../interfaces/settings.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  /* Defaults Settings */
  defaultSettings: Settings = {
    timerLength: 25,
    breakLength: 5,
    bumperLengthInMinutes: 2,
    useTimerBumpers: false,
    tasksLinkedToTimer: true,
    autoBreak: false,
    moveCompletedTaskToCompletedListTimeInMin: 15,
    completedTaskExpirationInDays: 7
  };

  currentSettings: Settings;
  currentSettingsSubject: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(this.defaultSettings);
  currentSettings$: Observable<Settings> = this.currentSettingsSubject.asObservable();

  constructor(private dataService: DataService<Settings>) { }

  getUserSettings$(userUid: string): Observable<Settings | null> {
    return this.dataService.getItem$(`settings/${userUid}`).pipe(
      map(settings => settings),
      catchError(error => of(error))
    );
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

  getTasksLinkedToTimer(): boolean {
    return this.currentSettings ? this.currentSettings.tasksLinkedToTimer : this.defaultSettings.tasksLinkedToTimer;
  }

  getAutoBreak(): boolean {
    return this.currentSettings ? this.currentSettings.autoBreak : this.defaultSettings.autoBreak;
  }

  getMoveCompletedTaskToCompletedListTimeInMin(): number {
    return this.currentSettings
      ? this.currentSettings.moveCompletedTaskToCompletedListTimeInMin
      : this.defaultSettings.moveCompletedTaskToCompletedListTimeInMin;
  }

  getCompletedTaskExpirationInDays(): number {
    return this.currentSettings
      ? this.currentSettings.completedTaskExpirationInDays
      : this.defaultSettings.completedTaskExpirationInDays;
  }

  updateUserSettings(newUserSettings: Settings, userUid: string): Promise<void> {
    return this.dataService.updateItem(`settings/${userUid}`, newUserSettings);
  }

  setCurrentSettings(settings: Settings) {
    this.currentSettings = settings;
    this.currentSettingsSubject.next(this.currentSettings);
  }
}

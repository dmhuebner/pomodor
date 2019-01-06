import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Defaults set
  timerLengthInSeconds = 1500;
  breakLengthInSeconds = 300;

  constructor() { }

  getTimerLength() {
    return this.timerLengthInSeconds;
  }

  setTimerLengthInSeconds(seconds) {
    this.timerLengthInSeconds = seconds * 60;
  }

  getBreakLength() {
    return this.breakLengthInSeconds;
  }

  setBreakLengthInSeconds(seconds) {
    this.breakLengthInSeconds = seconds * 60;
  }
}

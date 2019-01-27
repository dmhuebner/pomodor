import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Defaults set
  timerLengthInSeconds = 1500;
  breakLengthInSeconds = 300;
  bumperLengthInMinutes = 2;
  useTimerBumpers = false;

  constructor() { }

  getTimerLength() {
    return this.timerLengthInSeconds;
  }

  setTimerLengthInSeconds(seconds: number) {
    this.timerLengthInSeconds = seconds * 60;
  }

  getBreakLength(): number {
    return this.breakLengthInSeconds;
  }

  setBreakLengthInSeconds(seconds: number) {
    this.breakLengthInSeconds = seconds * 60;
  }

  getBumperLengthInMinutes(): number {
    return this.bumperLengthInMinutes;
  }

  setBumperLengthInMinutes(minutes: number) {
    this.bumperLengthInMinutes = minutes;
  }

  getUseTimerBumpers(): boolean {
    return this.useTimerBumpers;
  }

  setUseTimerBumpers(bool: boolean) {
    this.useTimerBumpers = bool;
  }
}

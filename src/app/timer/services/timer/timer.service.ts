import {Injectable, OnInit} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CompletedTimer } from '../../interfaces/CompletedTimer.interface';
import { SettingsService } from '@settings/services';
import { UsbLightService } from '@shared/services';
import { TimerPipe } from '../../pipes/timer.pipe';
import Settings from '@settings/interfaces/settings.interface';
import { NotificationsService } from '@shared/services';

@Injectable({
  providedIn: 'root'
})
export class TimerService implements OnInit {

  completedTimerList: CompletedTimer[] = [];

  timeLeft: number = this.settingsService.getTimerLength();
  // TODO figure out what type the timerInterval is
  timerInterval: any;

  // TODO determine if we need to use .asObservable or not..
  onBreakSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  onBreak$: Observable<boolean> = this.onBreakSubject.asObservable();

  timerOnSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  timerOn$: Observable<boolean> = this.timerOnSubject.asObservable();

  completedTimerListSubject: BehaviorSubject<CompletedTimer> = new BehaviorSubject<CompletedTimer>(null);
  completedTimerList$: Observable<CompletedTimer> = this.completedTimerListSubject.asObservable();

  currentTimerValueSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.timeLeft);
  currentTimerValue$: Observable<number> = this.currentTimerValueSubject.asObservable();

  timerOn: boolean;
  onBreak: boolean;
  currentSettings: Settings = {...this.settingsService.defaultSettings};

  constructor(private settingsService: SettingsService,
              private usbLightService: UsbLightService,
              private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    // Subscribe to subject observable and set value
    this.onBreak$.subscribe(val => this.onBreak = val);
    this.timerOn$.subscribe(val => this.timerOn = val);
    this.settingsService.currentSettings$.subscribe(settings => {
      this.currentSettings = settings;
      this.setTimeLeft();
    });
    this.currentTimerValue$.subscribe(val => this.timeLeft = val);
  }

  setOnBreak(bool: boolean): void {
    this.onBreak = bool;
    this.onBreakSubject.next(bool);
  }

  setTimerOn(bool: boolean): void {
    this.timerOnSubject.next(bool);
  }

  addCompletedTimer(completedTimer: CompletedTimer): void {
    this.completedTimerListSubject.next(completedTimer);
  }

  tickTimer(): void {
    this.timeLeft = this.timeLeft - 1;
    this.updateAppTitleElement(this.timeLeft);
    this.currentTimerValueSubject.next(this.timeLeft);
  }

  startTimer(): void {
    this.handleStartTimerUSBLight();
    this.updateAppTitleElement(this.timeLeft);

    this.setTimerOn(true);
    this.tickTimer();
    this.timerInterval = setInterval(() => {
      this.tickTimer();
      // If the time is up
      if (this.timeLeft < 0) {
        this.handleTimerIsUp();
      }
    }, 1000);
  }

  resetTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.endTimer();
    this.usbLightService.setLight('ff9900').subscribe();
  }

  endBreak() {
    // TODO this part will need to be handled still
    // if (this.onBreak) {
    //   this.timerService.addCompletedTimer(this.currentTimer);
    // }

    this.setOnBreak(false);
    this.resetTimer();
  }

  bumpTimerBack() {
    this.timeLeft -= (this.settingsService.getBumperLengthInMinutes() * 60);
    this.currentTimerValueSubject.next(this.timeLeft);
  }

  bumpTimerForward() {
    this.timeLeft += (this.settingsService.getBumperLengthInMinutes() * 60);
    this.currentTimerValueSubject.next(this.timeLeft);
  }

  setTimeLeft() {
    this.timeLeft = this.onBreak ? this.settingsService.getBreakLength() : this.settingsService.getTimerLength();
    this.currentTimerValueSubject.next(this.timeLeft);
  }

  private handleTimerIsUp() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.endTimer();
    // TODO this part will need to be handled still
    // this.currentTimer.completed = true;
    // if (this.onBreak) {
    //   this.currentTimer.completedWithBreak = true;
    //   this.timerService.addCompletedTimer(this.currentTimer);
    //   this.currentTimer = {
    //     completed: false,
    //     completedWithBreak: false
    //   };
    // }
    const notifyMessage = this.onBreak ? 'Break has ended!' : 'Timer has ended!';
    this.notificationsService.notify(notifyMessage);
    this.setOnBreak(!this.onBreak);
    this.setTimeLeft();
  }

  private endTimer() {
    this.setTimerOn(false);
    this.setTimeLeft();
    this.updateAppTitleElement();
    // Set USB light to yellow
    this.usbLightService.setLight('ff9900').subscribe();
  }

  // Updates title element based on timer via dom manipulation. If there is a better way, show me :)
  private updateAppTitleElement(timer?: number) {
    const formattedTimer = new TimerPipe().transform(timer);
    document.querySelector('title').innerText = !timer ? 'Pomodor' : `Pomodor | ${formattedTimer}`;
  }

  private handleStartTimerUSBLight() {
    // Determine what color the USB light should be
    const usbLightColor = this.onBreak ? '00ff00' : 'ff0000';

    // Turn on USB light if it is connected
    this.usbLightService.setLight(usbLightColor).subscribe();
  }
}

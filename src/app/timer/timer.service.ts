import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  private onBreakSubject = new BehaviorSubject<boolean>(false);
  onBreak$: Observable<boolean> = this.onBreakSubject.asObservable();

  private timerOnSubject = new BehaviorSubject<boolean>(false);
  timerOn$: Observable<boolean> = this.timerOnSubject.asObservable();

  setOnBreak(bool: boolean) {
    this.onBreakSubject.next(bool);
  }

  setTimerOn(bool: boolean) {
    this.timerOnSubject.next(bool);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CompletedTimer } from './interfaces/CompletedTimer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  completedTimerList: CompletedTimer[] = [];

  constructor() { }

  private onBreakSubject = new BehaviorSubject<boolean>(false);
  onBreak$: Observable<boolean> = this.onBreakSubject.asObservable();

  private timerOnSubject = new BehaviorSubject<boolean>(false);
  timerOn$: Observable<boolean> = this.timerOnSubject.asObservable();

  private completedTimerListSubject = new BehaviorSubject<CompletedTimer>(null);
  completedTimerList$: Observable<CompletedTimer> = this.completedTimerListSubject.asObservable();

  setOnBreak(bool: boolean) {
    this.onBreakSubject.next(bool);
  }

  setTimerOn(bool: boolean) {
    this.timerOnSubject.next(bool);
  }

  addCompletedTimer(completedTimer: CompletedTimer) {
    this.completedTimerListSubject.next(completedTimer);
  }
}

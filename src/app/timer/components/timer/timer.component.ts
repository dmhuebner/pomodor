import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() onBreak: boolean;
  @Input() timerOn: boolean;
  @Input() useTimerBumpers: boolean;
  @Input() bumperLengthInMinutes: boolean;
  @Input() currentTimerValue: boolean;

  @Output() timerStarted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() timerReset: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() breakEnded: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() timeBumpedBack: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() timeBumpedForward: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartTime() {
    this.timerStarted.emit(true);
  }

  onResetTimer() {
    this.timerReset.emit(true);
  }

  onEndBreak() {
    this.breakEnded.emit(true);
  }

  bumpTimerBack() {
    this.timeBumpedBack.emit(true);
  }

  bumpTimerForward() {
    this.timeBumpedForward.emit(true);
  }

}

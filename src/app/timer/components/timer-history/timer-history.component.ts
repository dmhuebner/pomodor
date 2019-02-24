import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CompletedTimer } from '../../../shared/interfaces/completedTimer.interface';

@Component({
  selector: 'pm-timer-history',
  templateUrl: './timer-history.component.html',
  styleUrls: ['./timer-history.component.scss']
})
export class TimerHistoryComponent implements OnInit {

  @Input()
  timerObject: CompletedTimer;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'done-checkmark-outline',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-done_outline-24px.svg'));

    iconRegistry.addSvgIcon(
      'done-checkmark',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-done-24px.svg'));
  }

  ngOnInit() {
  }

}

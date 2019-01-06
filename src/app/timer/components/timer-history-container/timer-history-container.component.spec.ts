import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerHistoryContainerComponent } from './timer-history-container.component';

describe('TimerHistoryContainerComponent', () => {
  let component: TimerHistoryContainerComponent;
  let fixture: ComponentFixture<TimerHistoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerHistoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerHistoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

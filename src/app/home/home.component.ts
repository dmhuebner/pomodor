import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeHeader: string;

  constructor() { }

  ngOnInit() {
    this.homeHeader = 'Welcome to Pomodime';
  }

}

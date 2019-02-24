import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../shared/services/auth/auth.service';
import { TimerService } from '../shared/services/timer/timer.service';
import { UsbLightService } from '../shared/services/usbLight/usb-light.service';
import { ToastrService } from 'ngx-toastr';
import User from '../shared/interfaces/user.interface';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  currentUser: User;

  constructor(private breakpointObserver: BreakpointObserver,
              private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
              public authService: AuthService,
              private timerService: TimerService,
              private usbLightService: UsbLightService,
              private toastr: ToastrService) {

    iconRegistry.addSvgIcon(
      'pomodor',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tomato-icon.svg'));
  }

  ngOnInit(): void {
    this.usbLightService.setLight('ff9900').subscribe();
    this.authService.user$.subscribe(user => this.currentUser = user);
  }

  async loginUser() {
    const authResult = await this.authService.login();
    console.log(authResult);
    if (this.currentUser) {
      this.toastr.success(null, `${this.currentUser.displayName} Logged In!`);
    }
  }

  async logout(): Promise<void> {
    this.timerService.resetTimer();
    this.toastr.success(null, `${this.currentUser.displayName} Logged Out`);
    return this.authService.logout();
  }

}

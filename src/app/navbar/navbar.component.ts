import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '@shared/services';
import { TimerService } from '@timer/services';
import { UsbLightService } from '@shared/services';
import { ToastrService } from 'ngx-toastr';
import User from '@shared/interfaces/user.interface';

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
    await this.authService.login();
    this.toastr.success(null, `${this.currentUser.displayName} Logged In!`);
  }

  async logout(): Promise<void> {
    this.timerService.resetTimer();
    this.toastr.success(null, `${this.currentUser.displayName} Logged Out`);
    await this.authService.logout();
    // TODO shouldn't have to reload when we logout - fix this
    // TODO Its also making it so the logout toastr isn't firing
    // TODO this reload is not cross platform
    window.location.reload();
  }

}

import { ClassProvider, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { TimerPipe } from '@timer/pipes/timer.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsbLightInterceptor } from './interceptors/usbLight.interceptor';
import { TimerCountdownComponent } from './components/timer-countdown/timer-countdown.component';

const USB_LIGHT_INTERCEPTOR_PROVIDER: ClassProvider = {
  provide: HTTP_INTERCEPTORS ,
  useClass: UsbLightInterceptor,
  multi: true
};

@NgModule({
  declarations: [
    NotFoundComponent,
    TimerPipe,
    TimerCountdownComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    TimerPipe,
    TimerCountdownComponent
  ],
  providers: [
    USB_LIGHT_INTERCEPTOR_PROVIDER
  ]
})
export class SharedModule { }

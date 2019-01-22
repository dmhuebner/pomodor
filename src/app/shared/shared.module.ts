import { ClassProvider, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatIconModule } from '@angular/material';
import { TimerPipe } from './pipes/timer.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsbLightInterceptor } from './interceptors/usbLight.interceptor';

const USB_LIGHT_INTERCEPTOR_PROVIDER: ClassProvider = {
  provide: HTTP_INTERCEPTORS ,
  useClass: UsbLightInterceptor,
  multi: true
};

@NgModule({
  declarations: [
    NotFoundComponent,
    TimerPipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    TimerPipe,
  ],
  providers: [
    USB_LIGHT_INTERCEPTOR_PROVIDER
  ]
})
export class SharedModule { }

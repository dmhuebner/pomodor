import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

// TODO It think we can remove this interceptor now.
@Injectable()
export class UsbLightInterceptor implements HttpInterceptor {
  // This interceptor's job is to catch any error that might be thrown from calling the USB LED light API.
  // We don't want to show the user errors when there is no USB LED light connected in case they are using the app without one
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const pattern = environment.localUSBLightBaseUrl + 'light/';

    if (request.url.startsWith(pattern)) {
      return next.handle(request).pipe(
        catchError(
          error => {
            return of(error);
          }
        ));
    } else {
      return next.handle(request);
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsbLightService {

  constructor(private http: HttpClient) { }

  setLight(hexColor): Observable<Object> {
    const url = environment.localUSBLightBaseUrl + 'light/';
    // Need to do this more gracefully. Only if usb led light is detected
    return this.http.get(url + hexColor);
  }
}


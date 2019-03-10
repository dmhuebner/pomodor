import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  notify(msg: string) {
    // Check if the browser supports notifications
    if (!('Notification' in window)) {
      alert('This browser does not support system notifications');
      return false;
    } else if (Notification.permission === 'granted') {
      // If it's okay let's create a notification
      const notification = new Notification(`Pomodor: ${msg}`, { icon: '/dist/pomodor/assets/icons/tomato-icon.svg' });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          const notification = new Notification(`Pomodor: ${msg}`, { icon: '/dist/pomodor/assets/icons/tomato-icon.svg' });
        }
      });
    }

    // Finally, if the user has denied notifications and you
    // want to be respectful there is no need to bother them any more.
  }
}

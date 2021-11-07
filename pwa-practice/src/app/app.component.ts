import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pwa-practice';
  vapidPublicKey = '';

  endpoint?: string;
  p256dh?: string;
  auth?: string;

  constructor(private swpush: SwPush) {
    this.swpush.subscription.subscribe((pushSubscription) => {
      if (pushSubscription == null) {
        this.swpush.requestSubscription({
          serverPublicKey: this.vapidPublicKey,
        });
      } else {
        console.log(
          'endpoint:',
          (this.endpoint = pushSubscription.toJSON().endpoint)
        );
        console.log(
          'publicKey:',
          (this.p256dh = pushSubscription.toJSON().keys!['p256dh'])
        );
        console.log(
          'authSecret:',
          (this.auth = pushSubscription.toJSON().keys!['auth'])
        );
      }
    });
  }

  onClick() {
    Notification.requestPermission().then(function (result) {
      if (result === 'granted') {
        alert('ok');
      }
    });
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {

    function producer(subscriber: any) {
      subscriber.next('HALLO!');
      subscriber.next(Math.random());
      subscriber.next(5);
      subscriber.next(7);

      setTimeout(() => {
        subscriber.error('BÖSER FEHLER!');
      }, 2000);
    }


    const observer = {
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.log('ERROR', err);
      },
      complete: () => {
        console.log('Complete');
      }
    };

    // producer(observer);

    const myObservable$ = new Observable(producer);
    // myObservable$.subscribe(observer);

    // myObservable$.subscribe(value => console.log('VALUE!', value));

  }
}

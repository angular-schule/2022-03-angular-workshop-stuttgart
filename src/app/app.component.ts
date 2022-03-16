import { Component } from '@angular/core';
import { filter, interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {

    // of('A', 'B', 'C')

    interval(1000).pipe(
      map(e => e * 3), // Vielfache von 3
      filter(e => e % 2 === 0) // nur gerade Zahlen
    ).subscribe({
      next: e => console.log(e),
      complete: () => console.log('COMPLETE')
    });

    [1,2,3].map(e => e * 10); // [10, 20, 30]
    [10, 20, 30].filter(e => e > 15); // [20, 30]

    ///////////////////////

    function producer(subscriber: any) {
      subscriber.next('HALLO!');
      subscriber.next(Math.random());
      subscriber.next(5);
      subscriber.next(7);

      setTimeout(() => {
        subscriber.complete();
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

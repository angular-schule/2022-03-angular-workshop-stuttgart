import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor() {
    this.books = [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 36.9,
        rating: 5
      },
      {
        isbn: '456',
        title: 'Vue.js',
        description: 'Das andere Framework',
        price: 32.9,
        rating: 3
      }
    ]
  }

  ngOnInit(): void {
  }

}

/*
// Klassen vs. Interfaces

class BookC {
  rating = 3
  constructor(public isbn: string, public title: string) {}

  rateUp() {
    this.rating++;
  }
}

const myBook = new BookC('123', 'Angular');


///////////////


interface BookI {
  isbn: string;
  title: string;
}

const myBook2: BookI = {
  isbn: '1234',
  title: ''
};



// JSON
{
  "title": "Angular",
  "isbn": "123"
}


*/

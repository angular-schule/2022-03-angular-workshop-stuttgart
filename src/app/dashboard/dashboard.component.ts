import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  today = Date.now();

  books: Book[] = [];

  constructor(private service: BookStoreService) {
    // this.books = this.service.getAllStatic();

    this.service.getAllBooks().subscribe((receivedBooks) => {
      this.books = receivedBooks;
    });
  }

  ngOnInit(): void {}

  doRateUp(book: Book) {
    const index = this.books.findIndex((b) => {
      return b.isbn === book.isbn;
    });

    // Early Exit, wenn kein Buch gefunden
    if (index === -1) {
      return;
    }

    // book.rating++; // Achtung: Dieser Code ist "mutable"!
    // Neues Buch mit verändertem Rating erzeugen
    // dadurch vermeiden wir Seiteneffekte
    // Stichwort: Immutability
    const newBook = {
      ...book,
      rating: book.rating + 1
    };

    // in der Liste ersetzen
    this.books[index] = newBook;
  }

  doRateDown(book: Book) {
    const index = this.books.findIndex((b) => {
      return b.isbn === book.isbn;
    });

    if (index === -1) {
      return;
    }

    const newBook = {
      ...book,
      rating: book.rating - 1
    };

    this.books[index] = newBook;
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
  isbn: '123',
  title: 'Angular'
};



// JSON
{
  "isbn": "123",
  "title": "Angular"
}



*/



const foo = {
  title: 'Angular',
  isbn: '123'
};

const bar = foo;


bar.title = 'Vue.js';

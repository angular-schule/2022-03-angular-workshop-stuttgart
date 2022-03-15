import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor() { }

  getAllStatic(): Book[] {
    return [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 36.9,
        rating: 5,
        authors: ['Ferdinand Malcher', 'Danny Koppenhagen', 'Johannes Hoppe']
      },
      {
        isbn: '456',
        title: 'Vue.js',
        description: 'Das andere Framework',
        price: 32.9,
        rating: 3,
        authors: ['Evan You']
      },
    ];
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/books'); // api.angular.schule/books
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '/books/' + isbn); // api.angular.schule/books/123
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl + '/books', book);
  }

  getAllStatic(): Book[] {
    return [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 36.9,
        rating: 5,
        authors: ['Ferdinand Malcher', 'Danny Koppenhagen', 'Johannes Hoppe'],
        firstThumbnailUrl: '',
      },
      {
        isbn: '456',
        title: 'Vue.js',
        description: 'Das andere Framework',
        price: 32.9,
        rating: 3,
        authors: ['Evan You'],
        firstThumbnailUrl: ''
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private service: BookStoreService
  ) {
    // PULL / synchron
    const isbn = this.route.snapshot.paramMap.get('isbn'); // /books/details/:isbn
    if (isbn) {
      console.log(isbn);

      this.service.getSingle(isbn).subscribe(book => {
        this.book = book;
      });
    }

    // PUSH / asynchron
    this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn');
      console.log('PUSH', isbn);
    });
  }

  ngOnInit(): void {
  }

}


/*
TODO:
  - ISBN aus der URL auslesen
  - BookStoreService.getSingle()
  - Anzeige
*/

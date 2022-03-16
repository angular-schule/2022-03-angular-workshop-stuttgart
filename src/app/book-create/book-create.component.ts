import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private service: BookStoreService, private router: Router) {
    this.bookForm = new FormGroup({
      isbn: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      rating: new FormControl(1),
      price: new FormControl(0),
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.bookForm.value);

    const newBook: Book = {
      ...this.bookForm.value,
      firstThumbnailUrl: '',
      authors: []
    };

    this.service.create(newBook).subscribe(book => {
      // 1. Option: zurücksetzen
      this.bookForm.reset({
        isbn: '',
        title: '',
        description: '',
        rating: 1,
        price: 0
      });

      // 2. Option: wegnavigieren
      this.router.navigate(['/books', 'details', book.isbn]); // [routerLink]="['/books', 'details', book.isbn]"
      // this.router.navigateByUrl('/books'); // routerLink="/books"
    });

  }

}

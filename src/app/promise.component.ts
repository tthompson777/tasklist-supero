import { Component, OnInit } from '@angular/core';

import { BookService } from './tasks.service';
import { Book } from './tasks';

@Component({
   selector: 'app-promise',
   templateUrl: './promise.component.html'
})
export class PromiseComponent implements OnInit { 
   promiseBooks: Promise<Book[]>;
   books: Book[];
   errorMessage: String;
   constructor(private bookService: BookService) { }
   ngOnInit(): void {
		this.promiseBooks = this.bookService.getBooksWithPromise();
		this.promiseBooks.then(
                books => this.books = books,
                error =>  this.errorMessage = <any>error);
   }
}
    
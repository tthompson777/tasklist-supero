import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from './tasks.service';
import { Book } from './tasks';

@Component({
   selector: 'app-observable',
   templateUrl: './observable.component.html'
})
export class ObservableComponent implements OnInit { 
   observableBooks: Observable<Book[]>;
   books: Book[];
   errorMessage: String;
   constructor(private bookService: BookService) { }
   ngOnInit(): void {
        this.observableBooks = this.bookService.getBooksWithObservable();
		this.observableBooks.subscribe(
            books => this.books = books,
            error =>  this.errorMessage = <any>error);
   }
}
    
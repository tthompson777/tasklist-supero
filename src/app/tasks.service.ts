import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Book } from './tasks';

@Injectable()
export class BookService {
    url = "http://localhost:4200/assets/data/books.json";
	constructor(private http:Http) { }
    getBooksWithObservable(): Observable<Book[]> {
        return this.http.get(this.url)
		        .map(this.extractData)
		        .catch(this.handleErrorObservable);
    }
    getBooksWithPromise(): Promise<Book[]> {
        return this.http.get(this.url).toPromise()
		    .then(this.extractData)
			.catch(this.handleErrorPromise);
    }
	private extractData(res: Response) {
	    let body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
		console.error(error.message || error);
		return Promise.reject(error.message || error);
    }	
}
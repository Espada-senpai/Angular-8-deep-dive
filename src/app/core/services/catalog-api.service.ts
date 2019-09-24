import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, JsonBook } from '../model/book';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {
  url = "https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/"
  urlQueryString ="?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i";
  bookList$ :Observable<Book[]>;
  constructor( private http : HttpClient) {
    this.bookList$ = this.load();
    setInterval(()=> this.bookList$ = this.load(), 10*1000)
   }

   getList():Observable<Book[]>{
      return this.bookList$;
   }  

   getBook(id:string):Observable<Book> {
      return this.bookList$.pipe(
        map(
        array=>array.find(book=>book.getId() === id)
      )
      );
    }

    load() : Observable<Book[]>{
      return this.http.get<JsonBook[]>(this.url+this.urlQueryString)
      .pipe(
        map( JsonArray => JsonArray.map(jsonBook => new Book(jsonBook))
        ),shareReplay(1)
      );
    }
}

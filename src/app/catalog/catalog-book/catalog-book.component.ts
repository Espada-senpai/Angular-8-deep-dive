import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/core/model/book';
import { CatalogApiService } from 'src/app/core/services/catalog-api.service';

import { switchMap, tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.scss']
})
export class CatalogBookComponent implements OnInit {

  book$: Observable<Book>;
  constructor( private catalogApi : CatalogApiService, private route : ActivatedRoute,private title:Title) { }

  ngOnInit() {
   this.book$ = this.route.paramMap.pipe(
     switchMap(paramMap=> this.catalogApi.getBook(paramMap.get('id'))),
     tap(book=> this.title.setTitle('Livre : '+ book.title))
   )
  }

}

import { Component, OnInit } from '@angular/core';
import { CatalogApiService } from 'src/app/core/services/catalog-api.service';
import { Book } from 'src/app/core/model/book';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {

  bookList$ : Observable<Book[]>;

  constructor(private apiService:CatalogApiService,private title:Title) { }

  ngOnInit() {

    this.bookList$ = this.apiService.getList();
    this.title.setTitle("Catalogue") ;
  }

}

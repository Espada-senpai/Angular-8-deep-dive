import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private cart: CartService, private router: Router,public url: UrlService) { }

  buy (book:Book) {
    console.log(book);
    
    this.cart.add(book);
    this.router.navigate(this.url.cartContent());
  }
}

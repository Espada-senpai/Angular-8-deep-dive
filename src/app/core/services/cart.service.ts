import { Injectable } from '@angular/core';
import { CartRow } from '../model/cart-row';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  rows: CartRow[] = [];
  
  constructor() { }

  add(book: Book) : void {
    const row = new CartRow(book,1);
    console.log(row);    
    this.rows.push(row);
  }

  remove(row: CartRow):void {
    this.rows= this.rows.filter(r=>r!==row);
    /**
     * Ou comme ça si on veut
       *  const index = this.rows.indexOf(row);
       *  this.rows.splice(index,1)
     */
  }

  count(): number {
    return this.rows.map(row => row.quantity).reduce((total,quantity) => total + quantity, 0);
  }

  total(): number {
    return this.rows.map(row => row.amount()).reduce((total,quantity) => total + quantity, 0);
  }

  isEmpty(): boolean {
    return this.rows.length === 0 ;
  }
}

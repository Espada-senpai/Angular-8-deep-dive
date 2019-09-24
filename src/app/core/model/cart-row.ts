import { Book } from './book';

export class CartRow {

    constructor (public book:Book, public quantity:number){
        
    }
    
    amount(): number {
       return this.book.price * this.quantity;
    }
}

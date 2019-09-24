import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }
  
  catalogList() : string[]{
    return ['/catalog','list'];
  }

  catalogBook(id:string) : string []{
    return ['/catalog','book',id] ;
  }
  
  cartContent():string []{
    return ['/cart','content'];
  }

  cartOrderTemplate():string[]{
    return ['/cart','order-template']
  }
  cartOrderReactive():string[]{
    return ['/cart','order-reactive']
  }
  
}

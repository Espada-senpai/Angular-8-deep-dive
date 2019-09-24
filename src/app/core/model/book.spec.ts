import { Book,JsonBook  } from "./book";
export const jsonBook1 :JsonBook ={
    _id: {
        $oid :'123V'
    },
    title :'aaaa',
    author:'xxxx',
    price:123.1

};
export const jsonBook2 :JsonBook ={
    _id: {
        $oid :'1QFV'
    },
    title : 'ADSQ',
    author: 'SQW',
    price: 123.1

};

export const book1 = new Book(jsonBook1);
export const book2 = new Book(jsonBook2);
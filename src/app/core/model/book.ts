export interface JsonBook {
 
}

export class Book {

  private _id?: {
    $oid: string;
  };
  isbn10?: string;
  title: string;
  author: string;
  price: number;
  pages?: number;
  rating?: number;
  votes?: number;
  image?: string;
  description?: string;

  constructor ( json: JsonBook ){
    Object.assign(this,json);
  }

  getId() : string {
    return this._id.$oid;
  }

  equals(other : Book):boolean{
    return this.getId() === other.getId();
  }
}


  
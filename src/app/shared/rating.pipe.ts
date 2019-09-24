import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: any): string {
    return '★★★★★'.substring(0,value) + '☆☆☆☆☆'.substring(value,5);
  }

}

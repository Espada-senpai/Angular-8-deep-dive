import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit {
  internalValue: number;
  @Input()
  set value (newRating:number){
    this.internalValue = newRating;
    this.buildArray(newRating);
  }
  get value(): number{
    return this.internalValue;
  }
  @Output()  valueChange = new EventEmitter<number>();
  stars:boolean[];

  constructor() { }
  
  ngOnInit() {
  }

  changeRating(index:number){
    this.valueChange.emit(index+1);  
  }

  private buildArray(v:number): void {
    this.stars = [1,2,3,4,5].
    map(i=> i<= v);
  }

  enter(index:number){
    this.buildArray(index+1);
  }

  leave(){
    this.buildArray(this.value);
  }

  log(){
    console.log('refresh');
  }
}

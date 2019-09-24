import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/core/model/book';
import { ActionService } from 'src/app/core/services/action.service';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent implements OnInit {

  @Input() book:Book;

  constructor(public action: ActionService )  { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() control : NgModel;
  @Input() form: NgForm;
  
  constructor() { }

  ngOnInit() {
  }

}

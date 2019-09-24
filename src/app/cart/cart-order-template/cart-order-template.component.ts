import { Component, OnInit, ViewChild } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart-order-template',
  templateUrl: './cart-order-template.component.html',
  styleUrls: ['./cart-order-template.component.scss']
})
export class CartOrderTemplateComponent implements OnInit {

@ViewChild(NgForm, {static:false}) formInfo: NgForm;
  data = {
    identity: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    },
    shipping: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    },
    billing: {
      street:'',
      zipcode: '',
      city: '',
      country: '',

    },
    hasDistinctBilling: false
  };

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Commande (Template Driven Form)');
  }

}

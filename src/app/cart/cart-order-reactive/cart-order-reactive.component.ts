import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { AppValidators } from 'src/app/core/app-validators';

@Component({
  selector: 'app-cart-order-reactive',
  templateUrl: './cart-order-reactive.component.html',
  styleUrls: ['./cart-order-reactive.component.scss']
})
export class CartOrderReactiveComponent implements OnInit {

  form : FormGroup;
  identity: FormGroup;
  shipping: FormGroup;
  billing: FormGroup;
  submitted = false;
  hasDistinctBilling: FormControl;
  

  constructor(private title: Title) { }

  onSubmit():void {
    this.submitted=true;
  }

  isDisabled ():boolean {
    return this.form.invalid && this.submitted;
  }

  hasBilling(): boolean{
    return this.hasDistinctBilling.value;
  }

  toggleBilling() {
    if (this.hasBilling()){
      this.form.addControl('billing',this.billing);
    }  else {
      this.form.removeControl('billing');
    }
  }
  ngOnInit() {
    this.title.setTitle('Commande (Reactive Driven Form)');
    this.hasDistinctBilling = new FormControl();
    this.identity= new FormGroup({
        firstname : new FormControl(null,{
          validators :[ Validators.required, Validators.minLength(2), ]
        }),
        lastname : new FormControl(null,{
          validators :[ Validators.required, Validators.minLength(2), ]
        }),
        email :    new FormControl(null,{
          validators :[ Validators.required, AppValidators.email('vermeg.com')]
        }),
        phone :    new FormControl(),

    });

    this.shipping= this.buildAddressFormGroup();
    this.billing = this.buildAddressFormGroup();

    this.form =    new FormGroup({
      identity :   this.identity,
      shipping:    this.shipping,
      billing:     this.billing,
      hasDistinctBilling: this.hasDistinctBilling
    })
    this.form.patchValue({
      identity:{
        firstname:'Elyes',
        lastname: 'Sellami'
      }
    })
    
  }
  buildAddressFormGroup(): FormGroup {
    return new FormGroup({
      street :     new FormControl(),
      zipcode :    new FormControl(null,{
        validators: [Validators.required,AppValidators.zipcode]
      }),
      city :       new FormControl(null,{
           validators :[ Validators.required ]
      }),
      country :    new FormControl(),

  });
  }
}

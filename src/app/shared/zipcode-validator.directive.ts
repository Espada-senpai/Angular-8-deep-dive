import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { AppValidators } from '../core/app-validators';

@Directive({
  selector: '[appZipcodeValidator]',
  providers :[
    { provide: NG_VALIDATORS,
      useValue:AppValidators.zipcode,
      multi:true}
  ]
})
export class ZipcodeValidatorDirective {

  constructor() { }

}

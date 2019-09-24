import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AppValidators } from '../core/app-validators';

@Directive({
  selector: '[appEmailValidator]',
  providers :[
    {provide: NG_VALIDATORS,
      useExisting: forwardRef(()=> EmailValidatorDirective) ,
      multi:true}
  ]
  
})
export class EmailValidatorDirective implements Validators {
  
  @Input() domain:string;
  validate(control: AbstractControl): ValidationErrors | null{
    return AppValidators.email(this.domain)(control)
  }

  constructor() { }

}

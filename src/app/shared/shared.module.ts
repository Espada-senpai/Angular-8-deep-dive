import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingPipe } from './rating.pipe';
import { RatingComponent } from './rating/rating.component';
import { BuyButtonComponent } from './buy-button/buy-button.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from './control/control.component';
import { ZipcodeValidatorDirective } from './zipcode-validator.directive';
import { EmailValidatorDirective } from './email-validator.directive';



@NgModule({
  declarations: [RatingPipe, RatingComponent, BuyButtonComponent, ErrorComponent, ControlComponent, ZipcodeValidatorDirective, EmailValidatorDirective],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  exports: [RatingPipe, RatingComponent, BuyButtonComponent, ErrorComponent, ControlComponent, ZipcodeValidatorDirective, EmailValidatorDirective]
})
export class SharedModule { }

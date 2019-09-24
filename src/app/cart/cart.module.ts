import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartRootComponent } from './cart-root/cart-root.component';
import { CartContentComponent } from './cart-content/cart-content.component';
import { CartOrderTemplateComponent } from './cart-order-template/cart-order-template.component';
import { CartOrderReactiveComponent } from './cart-order-reactive/cart-order-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CartRootComponent, CartContentComponent, CartOrderTemplateComponent, CartOrderReactiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }

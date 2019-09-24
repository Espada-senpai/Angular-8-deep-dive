import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartContentComponent } from './cart-content/cart-content.component';
import { CartOrderTemplateComponent } from './cart-order-template/cart-order-template.component';
import { CartOrderReactiveComponent } from './cart-order-reactive/cart-order-reactive.component';
import { CartRootComponent } from './cart-root/cart-root.component';


const routes: Routes = [
  { path: '', 
    component: CartRootComponent,
    children :[
      { path: 'content', component: CartContentComponent },
      { path: 'order-template', component: CartOrderTemplateComponent },
      { path: 'order-reactive', component: CartOrderReactiveComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }

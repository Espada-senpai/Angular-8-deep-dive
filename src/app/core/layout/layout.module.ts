import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SmallCartComponent } from './small-cart/small-cart.component';



@NgModule({
  declarations: [MenuComponent, SmallCartComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    SmallCartComponent
  ]
})
export class LayoutModule { }

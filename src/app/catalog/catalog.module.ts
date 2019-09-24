import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogRootComponent } from './catalog-root/catalog-root.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogBookComponent } from './catalog-book/catalog-book.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CatalogListItemComponent } from './catalog-list-item/catalog-list-item.component';


@NgModule({
  declarations: [CatalogRootComponent, CatalogListComponent, CatalogBookComponent, CatalogListItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }

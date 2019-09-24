import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogRootComponent } from './catalog/catalog-root/catalog-root.component';


const routes: Routes = [
  { path: 'catalog', 
    component: CatalogRootComponent, 
  },
  { path: 'cart', 
   loadChildren:() => import('./cart/cart.module').then(file=>file.CartModule)
  },
  { path: '', component: CatalogRootComponent },
  { path: '**', component: CatalogRootComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

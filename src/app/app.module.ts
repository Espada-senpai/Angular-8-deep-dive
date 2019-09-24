import { HttpClientModule } from '@angular/common/http';
import { Injectable, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { CatalogModule } from './catalog/catalog.module';
import { LayoutModule } from './core/layout/layout.module';

@Injectable()
export class ServiceNameService {
  
  constructor() { }

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HttpClientModule,
    LayoutModule,
    CartModule,
    AppRoutingModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'fr-TN'}
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

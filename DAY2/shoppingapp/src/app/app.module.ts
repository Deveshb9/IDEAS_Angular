import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfProducts } from '../components/listofproducts/listofproducts.component';
import { Product } from '../components/product/product.component';

@NgModule({
  declarations: [AppComponent, ListOfProducts, Product],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

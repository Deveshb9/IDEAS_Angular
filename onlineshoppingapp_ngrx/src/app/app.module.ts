import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from 'src/ngrx/reducers/products.reducer';
import { ListofproductsComponent } from './components/listofproducts/listofproducts.component';
import { ProductComponent } from './components/product/product.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { RatingComponent } from './components/molecules/rating/rating.component';

@NgModule({
  declarations: [AppComponent, ListofproductsComponent, ProductComponent,IconComponent,RatingComponent],
  imports: [BrowserModule, StoreModule.forRoot({ products: productsReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

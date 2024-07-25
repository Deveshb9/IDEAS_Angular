import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product } from './components/product/product.component';
import { RatingComponent } from './components/rating/rating.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { ListOfProducts } from './components/listofproducts/listofproducts.component';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';

@NgModule({
  declarations: [AppComponent, ListOfProducts, Product, RatingComponent, PostsComponent, NavbarComponent, PostdetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}

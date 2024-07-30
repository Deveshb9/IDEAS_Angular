import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product } from './components/product/product.component';
import { RatingComponent } from './components/rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { ListOfProducts } from './components/listofproducts/listofproducts.component';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PostService } from './services/posts.service';
import { ProductService } from './services/products.service';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { CartitemsComponent } from './components/cartitems/cartitems.component';
import { TemplatedrivennewproductComponent } from './components/forms/templatedrivennewproduct/templatedrivennewproduct.component';
import { ModeldrivennewproductsComponent } from './components/forms/modeldrivennewproducts/modeldrivennewproducts.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfProducts,
    Product,
    RatingComponent,
    PostsComponent,
    NavbarComponent,
    PostdetailsComponent,
    ProductdetailsComponent,
    CartComponent,
    CartitemsComponent,
    TemplatedrivennewproductComponent,
    ModeldrivennewproductsComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideHttpClient(), PostService, ProductService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}

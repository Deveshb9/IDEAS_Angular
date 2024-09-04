import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from 'src/ngrx/reducers/products.reducer';
import { ListofproductsComponent } from './components/listofproducts/listofproducts.component';
import { ProductComponent } from './components/product/product.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { RatingComponent } from './components/molecules/rating/rating.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from 'src/ngrx/effects/effects';
import { ProductService } from './service/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CamelCasePipe } from './pipes/camelcasing.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListofproductsComponent,
    ProductComponent,
    IconComponent,
    RatingComponent,
    CamelCasePipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ products: productsReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ProductsEffects]),
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

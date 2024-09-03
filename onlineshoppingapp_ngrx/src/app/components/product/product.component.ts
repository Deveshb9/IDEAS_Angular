import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from 'src/models/product.model';
import { incrementLikes } from 'src/ngrx/actions/products.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() productdetails: ProductModel = new ProductModel(
    0,
    '',
    0,
    0,
    0,
    '',
    ''
  );

  constructor(public store: Store<{ products: ProductModel[] }>) {}

 

  IncrementLikes() {
    this.store.dispatch(incrementLikes(this.productdetails.id));
  }
}

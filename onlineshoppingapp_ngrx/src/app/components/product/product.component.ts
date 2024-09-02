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
  isAddedToCart: boolean = false;
  @Input() productdetails: ProductModel = new ProductModel(
    0,
    '',
    0,
    0,
    0,
    '',
    ''
  );

  constructor(public store: Store<{ products: any }>) {}

  ChangeLikes() {
    // dispatch an action
    this.store.dispatch(incrementLikes(this.productdetails.id));
  }

  HandleChange(e: any) {
    if (e.target.checked) {
      // this.cartSrvObject.addItemToCart(this.productdetails);
    }
  }
}

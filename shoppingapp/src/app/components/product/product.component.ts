import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class Product {
  @Input() productdetails: ProductModel = new ProductModel(
    0,
    'NA',
    0,
    0.0,
    0,
    'NA',
    0
  );

  changeLikes() {
    this.productdetails.likes++;
  }

  isAddedToCart: boolean = false;
}

import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class Product {
  @Input() productdetails: ProductModel = new ProductModel(
    0,
    'NA',
    0,
    0.0,
    0,
    'NA'
  );
}

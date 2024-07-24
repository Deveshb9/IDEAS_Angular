import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class Product {
  @Input() productdetails: ProductModel = {
    id: 0,
    title: 'NA',
    price: 0,
    rating: 0.0,
    likes: 0,
    imageurl: 'NA',
  };
}

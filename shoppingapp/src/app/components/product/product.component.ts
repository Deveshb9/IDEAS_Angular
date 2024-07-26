import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class Product {
  constructor(public srvInstance: ProductService) {}
  @Input() product: ProductModel = new ProductModel(
    0,
    'NA',
    0,
    0.0,
    0,
    'NA',
    0
  );

  changeLikes() {
    this.product.likes++;
  }

  deleteProduct(id: number) {
    this.srvInstance.deleteProduct(id);
  }

  isAddedToCart: boolean = false;
}

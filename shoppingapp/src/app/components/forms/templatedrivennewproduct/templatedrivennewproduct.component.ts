import { Component } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { ProductModel } from '../../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templatedrivennewproduct',
  templateUrl: './templatedrivennewproduct.component.html',
  styleUrl: './templatedrivennewproduct.component.css',
})
export class TemplatedrivennewproductComponent {
  newProduct: ProductModel = new ProductModel();
  constructor(public productService: ProductService, public router: Router) {}
  HandleFormSubmit() {
    console.log(this.newProduct);
    this.productService.addProduct(this.newProduct);
    this.router.navigate(['/']);
  }
}

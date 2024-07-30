import { Component } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { restrictProductTitleValidator } from './customValidations';

@Component({
  selector: 'app-modeldrivennewproducts',
  templateUrl: './modeldrivennewproducts.component.html',
  styleUrl: './modeldrivennewproducts.component.css',
})
export class ModeldrivennewproductsComponent {
  constructor(public productService: ProductService, public router: Router) {}
  newProduct: ProductModel = new ProductModel();

  newProductForm: FormGroup = new FormGroup({
    id: new FormControl(this.newProduct.id),
    title: new FormControl(this.newProduct.title, [
      Validators.required,
      restrictProductTitleValidator(/Angular/i),
    ]),
    price: new FormControl(this.newProduct.price),
    likes: new FormControl(this.newProduct.likes),
    rating: new FormControl(this.newProduct.rating),
    imageurl: new FormControl(this.newProduct.imageurl),
  });

  AddNewProduct() {
    // console.log(this.newProductForm.controls['title'].dirty);
    // this.newProductForm.controls['rating'].setValue(5);
    // console.log(this.newProductForm.value);
    console.log(this.newProduct);
    this.productService.addProduct(this.newProduct);
    this.router.navigate(['/']);
  }
}

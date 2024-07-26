import { Component } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
  providers: [ProductService],
})
export class ProductdetailsComponent {
  constructor(
    public route: ActivatedRoute,
    public productService: ProductService
  ) {}
  productdetails: ProductModel = new ProductModel(0, 'NA', 0, 0.0, 0, 'NA', 0);
  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      let productId = param.id;
      this.productService.getProductById(productId).then((product) => {
        this.productdetails = product;
      });
    });
  }
}

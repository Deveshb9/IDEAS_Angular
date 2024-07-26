import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public productService: ProductService
  ) {}
  productdetails: ProductModel = new ProductModel();

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      let productId: number = param.id;
      this.productdetails = this.productService.getProductById(productId);
    });
  }
}

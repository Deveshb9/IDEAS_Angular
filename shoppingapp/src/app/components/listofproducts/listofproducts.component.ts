import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-listofproducts',
  templateUrl: './listofproducts.component.html',
  providers: [ProductService],
})
export class ListOfProducts implements OnInit {
  allProductList: ProductModel[] = [];
  constructor(public srvInstance: ProductService) {}

  async ngOnInit() {
    try {
      this.allProductList = await this.srvInstance.getAllProducts();
    } catch (error) {
      console.log(error);
    }
  }
}

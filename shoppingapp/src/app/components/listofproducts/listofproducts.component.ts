import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-listofproducts',
  templateUrl: './listofproducts.component.html',
  providers: [ProductService],
})
export class ListOfProducts {
  allProductList: ProductModel[] = [];
  constructor(public srvInstance: ProductService) {
    this.allProductList = srvInstance.productslist;
  }
}

import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  productslist: ProductModel[] = [];
  constructor(public httpclientobj: HttpClient) {}

  getAllProducts(): Promise<ProductModel[]> {
    //make AJAX Request
    return new Promise((resolve, reject) => {
      this.httpclientobj
        .get<ProductModel[]>('http://localhost:3000/products')
        .subscribe((products: ProductModel[]) => resolve(products));
    });
  }

  getProductById(id: number): Promise<ProductModel> {
    return new Promise((resolve, reject) => {
      this.httpclientobj
        .get<ProductModel>(`http://localhost:3000/products/${id}`)
        .subscribe((product: ProductModel) => resolve(product));
    });
  }

  deleteProduct(id: number) {
    this.httpclientobj
      .delete<ProductModel>(`http://localhost:3000/products/${id}`)
      .subscribe();
  }
}

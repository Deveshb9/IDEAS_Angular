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
        .subscribe((products: ProductModel[]) => {
          this.productslist = products;
          resolve(products);
        });
    });
  }

  // get by Ajax call
  // getProductById(id: number): Promise<ProductModel> {
  //   return new Promise((resolve, reject) => {
  //     this.httpclientobj
  //       .get<ProductModel>(`http://localhost:3000/products/${id}`)
  //       .subscribe((product: ProductModel) => resolve(product));
  //   });
  // }

  getProductById(productId: number): ProductModel {
    return (
      this.productslist.find((product) => product.id === productId) ||
      new ProductModel()
    );
  }

  deleteProduct(id: number) {
    this.httpclientobj
      .delete<ProductModel>(`http://localhost:3000/products/${id}`)
      .subscribe();
  }

  addProduct(product: ProductModel) {
    return new Promise((resolve, reject) => {
      this.httpclientobj
        .post<ProductModel>(`http://localhost:3000/products`, product)
        .subscribe((product: ProductModel) => {
          resolve(product);
        });
    });
  }
}

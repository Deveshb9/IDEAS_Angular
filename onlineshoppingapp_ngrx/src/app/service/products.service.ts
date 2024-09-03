import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/models/product.model';

@Injectable()
export class ProductService {

  constructor(public httpCLientObj: HttpClient) {}
  getAllProducts(): Observable<ProductModel[]> {
     return this.httpCLientObj
        .get<ProductModel[]>('http://localhost:3000/products')
    };
  }



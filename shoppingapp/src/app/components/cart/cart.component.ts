import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  count: number = 0;
  cartproducts: ProductModel[] = [];
  constructor(public cartService: CartService) {}
}

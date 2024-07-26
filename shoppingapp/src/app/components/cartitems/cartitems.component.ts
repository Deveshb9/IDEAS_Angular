import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrl: './cartitems.component.css',
})
export class CartitemsComponent {
  constructor(public cartService: CartService) {}
}

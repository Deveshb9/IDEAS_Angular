import { ProductModel } from '../models/product.model';

export class CartService {
  cartItems: ProductModel[] = [];

  addToCart(product: ProductModel) {
    this.cartItems.push(product);
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
  }
}

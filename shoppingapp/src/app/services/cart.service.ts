import { ProductModel } from '../models/product.model';

export class CartService {
  cartItems: ProductModel[] = [];

  getNoOfItems() {
    return this.cartItems.length;
  }

  addToCart(product: ProductModel) {
    this.cartItems.push(product);
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../product-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  buyProduct(product: Product) {
    const prodIndex = this.items.findIndex(item => item.id == product.id);
    if (prodIndex == -1) {
      this.items.push(product);
    }
    else {
      this.items[prodIndex].quantity++;
    }
    console.log("added to cart", this.items);
  }

  removeProduct(id: number) {
    const prodIndex = this.items.findIndex(item => item.id == id);
    if (this.items[prodIndex].quantity == 1) {
      this.items.splice(this.items.findIndex(item => item.id = id), 1);
      console.log("removed from cart", this.items);
      return -1;
    }
    else {
      this.items[prodIndex].quantity--;
      console.log("removed from cart", this.items);
      return this.items[prodIndex].quantity;
    }
  }

  checkoutCart() {
    console.log("ordered", this.items);
    this.items = []
  }

  getCart() {
    return this.items;
  }
}

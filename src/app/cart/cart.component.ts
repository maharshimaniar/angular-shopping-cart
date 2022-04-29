import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cart.getCart();
  }

  addItem(item: Product){
    this.cart.buyProduct(item);
  }

  removeItem(id: number){
    this.cart.removeProduct(id);
  }

}

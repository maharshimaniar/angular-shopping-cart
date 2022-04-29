import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../product-list';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId : number | undefined;
  product: Product | undefined;
  added: boolean = false;
  
  constructor(private route: ActivatedRoute, private cart: CartService) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = products.find(item => item.id == this.productId)
  }

  buyItem(product: Product){
    this.added = true;
    this.cart.buyProduct(product);
  }

  addItem(item: Product){
    this.cart.buyProduct(item);
  }

  removeItem(id: number){
    let remaining = this.cart.removeProduct(id);
    if (remaining == -1 ){
      this.added = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';

import { Product, products } from '../product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  productList: Product[] = [];

  ngOnInit(): void {
    this.productList = products;
  }

  shareItem(id: number) {
    window.alert("Item Shared! " + id);
  }

  subscribeItem(id: number){
    window.alert("Item Subscribed " + id);
  }

}

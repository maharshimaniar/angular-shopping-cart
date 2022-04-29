import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product-list';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() event = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

}

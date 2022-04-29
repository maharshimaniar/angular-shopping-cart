import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

}

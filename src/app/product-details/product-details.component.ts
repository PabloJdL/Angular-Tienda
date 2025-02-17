import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  imports: [NgIf, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    // First get the product id from the current route.
    const productId = Number(this.route.snapshot.params['id']);
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
}

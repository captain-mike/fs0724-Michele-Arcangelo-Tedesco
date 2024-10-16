import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart:iProduct[] = [];

  constructor(
    private productSvc:ProductService
  ){}

  ngOnInit(){
    this.productSvc.cart$
    .subscribe(product => {
      this.cart.push(product);
    })
  }

}

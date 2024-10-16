import { Component } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products:iProduct[] = []

  constructor(
    private productSvc:ProductService
  ){}

  ngOnInit(){

    this.productSvc.getAllProducts()
    .subscribe(products => {
      this.products = products
    })

  }

  addToCart(product:iProduct){
    this.productSvc.addToCart(product)
  }

  addToFav(product:iProduct){
    this.productSvc.addToFavourites(product)
  }

}

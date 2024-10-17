import { Component } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {
  products:iProduct[] = []

  constructor(
    private productSvc:ProductService
  ){}

  ngOnInit(){

    this.productSvc.favourites$
    .subscribe(prodotto => {
      this.products.push(prodotto)
    })

  }
}

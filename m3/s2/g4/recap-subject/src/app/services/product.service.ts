import { Injectable } from '@angular/core';
import { map, ReplaySubject, Subject, tap } from 'rxjs';
import { iProduct } from '../interfaces/i-product';
import { HttpClient } from '@angular/common/http';
import { IJsonResponse } from '../interfaces/i-json-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = 'https://dummyjson.com/products'
  cart$ = new Subject<iProduct>()

  favourites$ = new ReplaySubject<iProduct>()
  //

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<IJsonResponse>(this.apiUrl)
    .pipe(
      map(res => res.products)
    )
  }

  addToCart(product:iProduct){
    this.cart$.next(product);
  }

  addToFavourites(product:iProduct){
    this.favourites$.next(product);
  }



}

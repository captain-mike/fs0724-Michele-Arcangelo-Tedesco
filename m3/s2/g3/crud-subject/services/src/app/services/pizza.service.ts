import { HttpClient } from '@angular/common/http';
import { iPizza } from './../interfaces/ipizza';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subject, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizze'

  subject$ = new Subject<iPizza>();

  pizzeArr:iPizza[] = []
  pizze$ = new BehaviorSubject<iPizza[]>([])

  constructor(
    private http:HttpClient
  ) {

    this.getAllPizza()

  }


  getAllPizza() {
    this.http.get<iPizza[]>(this.apiUrl)
    .pipe(
      tap(pizze => this.pizze$.next(pizze))
    )
    .subscribe()
  }

  getPizzaById(id:number){
    return this.pizze$.getValue().filter(p => p.id === id)
  }

  addPizza(newPizza:Partial<iPizza>){
    return this.http.post<iPizza>(this.apiUrl, newPizza)
    .pipe(
      tap(pizza=>{
        this.pizzeArr.push(pizza)
        this.pizze$.next(this.pizzeArr)
      })
    )
  }

  editPizza(pizza:iPizza){
    return this.http.put<iPizza>(`${this.apiUrl}/${pizza.id}`,pizza)
    .pipe(
      tap(pizzaResponse=>{
        const index = this.pizzeArr.findIndex(p => p.id === pizza.id)
        this.pizzeArr.splice(index,1,pizza)

        this.pizze$.next(this.pizzeArr)
      })
    )
  }

  deletePizza(id:number){
    return this.http.delete<iPizza>(`${this.apiUrl}/${id}`)
  }

  addToCart(pizza:iPizza){
    this.subject$.next(pizza)
  }

}

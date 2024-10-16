import { HttpClient } from '@angular/common/http';
import { iPizza } from './../interfaces/ipizza';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizze'

  constructor(
    private http:HttpClient
  ) { }


  getAllPizza():Observable<iPizza[]> {
    return this.http.get<iPizza[]>(this.apiUrl)
  }

  getPizzaById(id:number){
    return this.http.get<iPizza>(`${this.apiUrl}/${id}`)
  }

  addPizza(newPizza:Partial<iPizza>){
    return this.http.post<iPizza>(this.apiUrl, newPizza)
  }

  editPizza(pizza:iPizza){
    return this.http.put<iPizza>(`${this.apiUrl}/${pizza.id}`,pizza)
  }

  deletePizza(id:number){
    return this.http.delete<iPizza>(`${this.apiUrl}/${id}`)
  }

}

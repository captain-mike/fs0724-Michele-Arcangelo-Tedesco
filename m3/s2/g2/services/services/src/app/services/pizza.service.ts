import { iPizza } from './../interfaces/ipizza';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizze'

  constructor() { }

  getAllPizza(){
    return <Promise<iPizza[]>> fetch(this.apiUrl).then(res => res.json())
  }

  getPizzaById(id:number){
    return <Promise<iPizza>> fetch(`${this.apiUrl}/${id}`)
    .then(res => res.json())
  }

  createPizza(newPizza:Partial<iPizza>):Promise<iPizza> {
    return <Promise<iPizza>> fetch(this.apiUrl,{
      method: 'POST',
      headers:{
        "Content-type" : 'application/json'
      },
      body: JSON.stringify(newPizza)
    })
    .then(res => res.json())
  }

  editPizza(pizza:iPizza){
    return <Promise<iPizza>> fetch(`${this.apiUrl}/${pizza.id}`,{
      method: 'PUT',
      headers:{
        "Content-type" : 'application/json'
      },
      body: JSON.stringify(pizza)
    }).then(res => res.json())
  }

  deletePizza(id:number):Promise<iPizza>{
    return <Promise<iPizza>> fetch(`${this.apiUrl}/${id}`,{
      method: 'DELETE',
      headers:{
        "Content-type" : 'application/json'
      },
    }).then(res => res.json())
  }

}

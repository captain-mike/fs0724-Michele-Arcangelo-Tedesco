import { Injectable } from '@angular/core';
import { iPizzaiolo } from '../models/ipizzaiolo';
import { iPizza } from '../models/ipizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaioliService {

  pizzaioli:iPizzaiolo[] = [
    { "id": 101, "nome": "Mario Rossi", "anni": 45 },
    { "id": 102, "nome": "Luigi Bianchi", "anni": 38 },
    { "id": 103, "nome": "Giovanni Verdi", "anni": 50 },
    { "id": 104, "nome": "Antonio Neri", "anni": 42 },
    { "id": 105, "nome": "Francesco Gialli", "anni": 36 },
    { "id": 106, "nome": "Giorgio Blu", "anni": 29 },
    { "id": 107, "nome": "Paolo Arancio", "anni": 33 },
    { "id": 108, "nome": "Davide Viola", "anni": 40 },
    { "id": 109, "nome": "Alessandro Marrone", "anni": 27 },
    { "id": 110, "nome": "Stefano Rosa", "anni": 48 }
  ]

  constructor() { }

  getAuthorWithPizze(pizze:iPizza[]):iPizzaiolo[]{
    return this.pizzaioli.map(pizzaiolo => {

      const foundPizza = pizze.find(pizza => pizzaiolo.id === pizza.pizzaioloId)

      if(!foundPizza) return pizzaiolo

      return {
          ...pizzaiolo,
          pizza: foundPizza
      }

  })
}


}

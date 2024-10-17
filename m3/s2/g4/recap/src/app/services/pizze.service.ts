import { Injectable } from '@angular/core';
import { iPizza } from '../models/ipizza';
import { iPizzaiolo } from '../models/ipizzaiolo';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

  pizze:iPizza[] = [
    { id: 1, gusto: 'Margherita', prezzo: 6.5, pizzaioloId: 101 },
    { id: 2, gusto: 'Diavola', prezzo: 1, pizzaioloId: 102 },
    { id: 3, gusto: 'Quattro Stagioni', prezzo: 8.0, pizzaioloId: 103 },
    { id: 4, gusto: 'Capricciosa', prezzo: 8.5, pizzaioloId: 101 },
    { id: 5, gusto: 'Prosciutto e Funghi', prezzo: 7.0, pizzaioloId: 102 },
    { id: 6, gusto: 'Tonno e Cipolla', prezzo: 7.5, pizzaioloId: 104 },
    { id: 7, gusto: 'Quattro Formaggi', prezzo: 8.0, pizzaioloId: 105 },
    { id: 8, gusto: 'Vegetariana', prezzo: 7.0, pizzaioloId: 101 },
    { id: 9, gusto: 'Salsiccia e Friarielli', prezzo: 8.5, pizzaioloId: 103 },
    { id: 10, gusto: 'Boscaiola', prezzo: 8.0, pizzaioloId: 102 }
  ];


  getPizzeWithAuthor(pizzaioli:iPizzaiolo[]):void{
    this.pizze = this.pizze.map(pizza => {

        const foundPizzaiolo = pizzaioli.find(pizzaiolo => pizzaiolo.id === pizza.pizzaioloId)

        if(!foundPizzaiolo) return pizza

        return {
            ...pizza,
            pizzaioloName: foundPizzaiolo.nome
        }

    })

  }

  constructor() { }
}

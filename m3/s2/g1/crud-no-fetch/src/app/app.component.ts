import { Component } from '@angular/core';
import { iPizza } from './i-pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pizze:iPizza[] = [
    {
      id: 1,
      gusto: "Diavola",
      prezzo: 1,
    },
    {
      id: 3,
      gusto: "Mimosa",
      prezzo: 10,
    }
  ]

  deletePizza(id:number){

    this.pizze = this.pizze.filter(p => p.id !== id)

  }

  createPizza(newPizza:iPizza){
    this.pizze.push(newPizza)
  }


}

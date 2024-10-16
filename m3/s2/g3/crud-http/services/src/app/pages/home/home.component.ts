import { Component } from '@angular/core';
import { iPizza } from '../../interfaces/ipizza';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  pizze:iPizza[] = []

  constructor(
    private pizzaSvc:PizzaService
  ){}


  ngOnInit(){

    this.pizzaSvc.getAllPizza()
    .subscribe(pizze =>{
        this.pizze = pizze
    })

  }

  delete(id:number){
    this.pizzaSvc.deletePizza(id)
    .subscribe(()=>{
        this.pizze = this.pizze.filter(p => p.id !== id)
    })
  }

}

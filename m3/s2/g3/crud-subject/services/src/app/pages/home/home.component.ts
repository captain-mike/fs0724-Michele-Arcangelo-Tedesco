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
  preferiti:iPizza[] = []

  constructor(
    private pizzaSvc:PizzaService
  ){}


  ngOnInit(){

    this.pizzaSvc.pizze$.subscribe(pizze=>{
      this.pizze = pizze
    })

    this.pizzaSvc.subject$.subscribe(pizze => {
      this.preferiti.push(pizze)
    })

  }

  like(pizza:iPizza){
    this.pizzaSvc.addToCart(pizza)
  }

  delete(id:number){
    this.pizzaSvc.deletePizza(id)
    .subscribe(()=>{
        this.pizze = this.pizze.filter(p => p.id !== id)
    })
  }

}

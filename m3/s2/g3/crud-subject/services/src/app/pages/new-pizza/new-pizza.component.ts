import { Component } from '@angular/core';
import { iPizza } from '../../interfaces/ipizza';
import { PizzaService } from '../../services/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pizza',
  templateUrl: './new-pizza.component.html',
  styleUrl: './new-pizza.component.scss'
})
export class NewPizzaComponent {

  constructor(
    private pizzaSvc:PizzaService,
    private router:Router
  ){}

  newPizza:Partial<iPizza> = {}

  isSuccess:boolean = false
  isError:boolean = false


  save(){
    this.pizzaSvc.addPizza(this.newPizza)
    .subscribe(pizza => {
      console.log(pizza.id);
    })
  }

}

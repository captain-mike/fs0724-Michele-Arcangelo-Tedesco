import { Component, OnInit } from '@angular/core';
import { iPizza } from '../../interfaces/ipizza';
import { PizzaService } from '../../services/pizza.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrl: './edit-pizza.component.scss'
})
export class EditPizzaComponent implements OnInit {

  pizza!:iPizza

  constructor(
    private pizzaSvc:PizzaService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){

    this.route.params.subscribe(params => {

      this.pizzaSvc.getPizzaById(params['id'])
      .subscribe(pizza => {
        this.pizza = pizza
      })

    })

  }

  save(){
    this.pizzaSvc.editPizza(this.pizza).subscribe(()=>{

    })
  }
}

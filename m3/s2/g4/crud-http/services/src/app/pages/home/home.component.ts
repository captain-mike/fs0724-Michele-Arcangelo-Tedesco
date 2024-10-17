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

  isLoading:boolean = false
  errorMessage:string = ''

  constructor(
    private pizzaSvc:PizzaService
  ){}


  ngOnInit(){

    this.isLoading = true
    this.pizzaSvc.getAllPizza()
    .subscribe({
      next:pizze =>{
        this.isLoading = false
        this.pizze = pizze
      },
      error:errorMessage =>{
        this.isLoading = false
        this.errorMessage = errorMessage
      }
    }
  )

  }

  delete(id:number){
    this.pizzaSvc.deletePizza(id)
    .subscribe(()=>{
        this.pizze = this.pizze.filter(p => p.id !== id)
    })
  }

}

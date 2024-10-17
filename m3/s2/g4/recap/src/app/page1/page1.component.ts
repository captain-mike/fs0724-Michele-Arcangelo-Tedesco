import { Component } from '@angular/core';
import { iPizza } from '../models/ipizza';
import { PizzeService } from '../services/pizze.service';
import { PizzaioliService } from '../services/pizzaioli.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

  //mostra le pizze corredate di nome pizzaiolo

  pizze:iPizza[] = []

  constructor(
    private pizzeSvc:PizzeService,
    private PizzaioliSvc:PizzaioliService
  ){}

  ngOnInit(){

    this.pizzeSvc.getPizzeWithAuthor(this.PizzaioliSvc.pizzaioli)//upgrade dell'array pizze

    this.pizze = this.pizzeSvc.pizze

  }

}

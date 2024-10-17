import { Component } from '@angular/core';
import { iPizza } from '../models/ipizza';
import { PizzeService } from '../services/pizze.service';
import { PizzaioliService } from '../services/pizzaioli.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {

  //mostra le pizze corredate di nome pizzaiolo

  pizze:iPizza[] = []

  constructor(
    private pizzeSvc:PizzeService,
    private PizzaioliSvc:PizzaioliService
  ){}

  ngOnInit(){

    this.pizzeSvc.getPizzeWithAuthor(this.PizzaioliSvc.pizzaioli)

    this.pizze = this.pizzeSvc.pizze

  }

}

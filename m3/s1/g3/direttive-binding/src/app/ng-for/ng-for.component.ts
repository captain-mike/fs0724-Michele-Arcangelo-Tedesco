import { Component } from '@angular/core';
import { Ipizza } from '../ipizza';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {

  pizze:Ipizza[] = [
    {
      id:0,
      gusto:'Margherita',
      prezzo: 5
    },
    {
      id:1,
      gusto:'Diavola',
      prezzo: 1
    },
    {
      id:3,
      gusto:'Capricciosa',
      prezzo: 7
    },
  ]

  delete(id:number){
    const res = this.pizze.filter(p => p.id !== id)
    this.pizze = res
  }

}

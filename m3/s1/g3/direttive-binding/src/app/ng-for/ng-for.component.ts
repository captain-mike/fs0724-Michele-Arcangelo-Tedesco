import { Component } from '@angular/core';
import { Ipizza } from '../ipizza';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {

  //Questo arredi di pizze verrà utilizzato nell'Html al fine di effettuare un ciclo e mostrare un elemento del DOM per ogni pizza.
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

  //Questo metodo accetta come argomento un ID.
  //Grazie a questo ID andrà a filtrare le pizze rimuovendo solo la pizza con l'id specificato Ed infine assegnerà il nuovo array alla proprietà pizze
  //Modificare l'array pizze equivarrà ad aggiornare visualizzazione grafica delle pizze lato HTML.
  delete(id:number){
    const res = this.pizze.filter(p => p.id !== id)
    this.pizze = res
  }

}

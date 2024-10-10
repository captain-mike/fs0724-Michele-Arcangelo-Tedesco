import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iPizza } from '../../Models/i-pizza';
import { pizze } from '../../../assets/pizze';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.scss'
})
export class DettaglioComponent {

  pizza!:iPizza

  constructor(private route:ActivatedRoute){}

  ngOnInit(){

    //recupera dettagli rotta
    this.route.params.subscribe((params:any) => {

      console.log(params);
        const found = pizze.find(p => p.id == params.id)
        if(found){
          this.pizza = found
        }else{
          console.error('non trovato')
        }
    })
    //recupera l'oggetto

  }

}

import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

  private sub!:Subscription

  ngOnInit(){

    const intervallo = new Observable<number>(observer => {
      let count:number = 0;

      setInterval(() => {
        observer.next(count);//next invia un nuovo dato ai subscribe

        if(count == 5){
          observer.complete()//Completa l'invio di dati terminandolo se non ci sono stati errori
          // console.log('Completato');

        }

        if(count == 3){
          observer.error(new Error('Count è  troppo grande'));
          //Error invia un errore
        }

        count++;
      }, 1000)
    })


    this.sub = intervallo.subscribe({
      next:datiInviati => {
        console.log(datiInviati);
      },
      error: error => console.log(error),
      complete: () => console.log('completato')
    })

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}

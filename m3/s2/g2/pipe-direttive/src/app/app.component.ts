import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipe-direttive';

  pizza:{gusto:string, prezzo:number} = {
    gusto: '',
    prezzo: 0
  }

  oggi:Date = new Date()

  testo:string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nisi cum hic deleniti quibusdam ullam dolores, vero nulla saepe, animi unde illo minus? Aliquid illo quasi minus quisquam tenetur odio.'


  getLocaleDate(){
    return this.oggi.toLocaleDateString('it-IT')
  }

}

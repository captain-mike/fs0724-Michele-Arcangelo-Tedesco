import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  items = Array.from({length:1000}).map((_,i) => {
    return `Elemento n°${i}`
  })

}

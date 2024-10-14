import { Component, EventEmitter, Output } from '@angular/core';
import { iPizza } from '../i-pizza';

@Component({
  selector: 'app-crea',
  templateUrl: './crea.component.html',
  styleUrl: './crea.component.scss'
})
export class CreaComponent {

  @Output() onCreateRequest = new EventEmitter<iPizza>();

  newPizza:iPizza = {
    id: 0,
    gusto: '',
    prezzo: 0
  }

  create(){
    this.onCreateRequest.emit(this.newPizza)
    this.newPizza = {
      id: 0,
      gusto: '',
      prezzo: 0
    }
  }

}

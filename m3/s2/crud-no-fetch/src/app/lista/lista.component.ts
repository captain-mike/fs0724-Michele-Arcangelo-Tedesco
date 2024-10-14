import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iPizza } from '../i-pizza';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  @Input() pizze:iPizza[] = []

  @Output() onDeleteRequest = new EventEmitter<number>()

  delete(id:number){
    this.onDeleteRequest.emit(id)
  }

}

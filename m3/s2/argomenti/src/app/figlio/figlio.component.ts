import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrl: './figlio.component.scss'
})
export class FiglioComponent {

  @Input() stringa:string = '';
  @Output() onClickOutput = new EventEmitter<string>();


  inviaDato(){
    this.onClickOutput.emit(`Elemento cliccato! Contenuto: ${this.stringa}`);
  }

}

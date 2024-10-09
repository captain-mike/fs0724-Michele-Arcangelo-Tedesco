import { Component } from '@angular/core';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrl: './prop.component.scss'
})
export class PropComponent {

  contenuto:string = '<b>Ciao</b>'//Questa stringa contiene anche dei tag HTML.
  color:string = 'red'

  visible:boolean = true

  //Un metodo che ogni volta che viene lanciato inverte il valore booleano della proprietà visible.
  toggle(){
    this.visible = !this.visible
  }

}

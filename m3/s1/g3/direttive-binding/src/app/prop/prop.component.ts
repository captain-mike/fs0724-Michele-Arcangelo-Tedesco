import { Component } from '@angular/core';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrl: './prop.component.scss'
})
export class PropComponent {

  contenuto:string = '<b>Ciao</b>'
  color:string = 'red'

  visible:boolean = true

  toggle(){
    this.visible = !this.visible
  }

}

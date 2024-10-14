import { Component } from '@angular/core';

@Component({
  selector: 'app-genitore',
  templateUrl: './genitore.component.html',
  styleUrl: './genitore.component.scss'
})
export class GenitoreComponent {

  nome:string = 'Mario';

  handleData(event:any){
    console.log(event);

  }

}

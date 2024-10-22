import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrl: './ng-model.component.scss'
})
export class NgModelComponent {

  nome:string = 'Mario'

  user:{name:string, age:number} = {
    name: '',
    age: 0
  }

}

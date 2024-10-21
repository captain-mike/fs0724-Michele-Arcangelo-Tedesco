import { Component } from '@angular/core';
import { StatoService } from '../../services/stato.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  status:boolean = false;

  constructor(private statoSvc:StatoService){}

  changeStatus(){
    this.statoSvc.status = this.status
  }

}

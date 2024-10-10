import { Component } from '@angular/core';
import { iPizza } from '../../Models/i-pizza';
import { pizze } from '../../../assets/pizze';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  pizzeArr:iPizza[] = pizze

}

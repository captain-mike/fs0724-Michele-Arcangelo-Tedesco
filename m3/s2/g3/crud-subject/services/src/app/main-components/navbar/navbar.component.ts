import { Component } from '@angular/core';
import { iPizza } from '../../interfaces/ipizza';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  preferiti:iPizza[] = []

  constructor(
    private pizzaSvc:PizzaService
  ){}

  ngOnInit(): void {

    this.pizzaSvc.subject$.subscribe(pizza => {
      this.preferiti.push(pizza);
    })

  }

}

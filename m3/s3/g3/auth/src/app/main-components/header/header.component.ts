import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLoggedIn:boolean = false;

  constructor(
    private authSvc:AuthService
  ){}


  ngOnInit(){

    this.authSvc.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })

  }

  logout():void {

    this.authSvc.logout()

  }

}

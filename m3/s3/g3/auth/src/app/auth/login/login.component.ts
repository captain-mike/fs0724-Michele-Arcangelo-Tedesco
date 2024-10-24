import { Component } from '@angular/core';
import { iLoginRequest } from '../../interfaces/ilogin-request';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formData:iLoginRequest = {
    email : '',
    password : ''
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}

  login(){
    this.authSvc.login(this.formData)
    .subscribe(data =>{
      this.router.navigate(['/dashboard'])
    })
  }

}
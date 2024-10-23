import { Component } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  formData:Partial<iUser> = {}

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}

  register(){

    this.authSvc.register(this.formData)
    .subscribe(res => {
      this.router.navigate(['/auth/login']);
    })

  }

}

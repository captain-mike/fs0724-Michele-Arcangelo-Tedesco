import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    return this.authSvc.isLoggedIn$.pipe(map(isLoggedIn => {//mi interfaccio con isLoggedIn$ che contiene un observable attraverso il quale transitano dati boolean

      if(!isLoggedIn){
        this.router.navigate(['/auth/login'])
      }

     return isLoggedIn//true se l'utente è loggato, false se non lo è.
     //false butta fuori l'utente dalle rote protette da questa guard
    }))

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.canActivate(childRoute, state)
  }

}

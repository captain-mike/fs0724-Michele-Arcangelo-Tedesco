import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, map, tap } from 'rxjs';
import { IAccessData } from '../interfaces/i-access-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { iUser } from '../interfaces/i-user';
import { iLoginRequest } from '../interfaces/ilogin-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService();//Permette di lavorare facilmente con JWT

  registerUrl:string = environment.registerUrl
  loginUrl:string = environment.loginUrl

  authSubject$ = new BehaviorSubject<IAccessData | null>(null)

  user$ = this.authSubject$.asObservable()
  .pipe(
    tap(accessData => this.isLoggedIn == !!accessData),
    map(accessData => accessData?.user)
  )

  isLoggedIn$ = this.authSubject$
  .pipe(map(accessData => !!accessData))


  isLoggedIn:boolean = false

  autoLogoutTimer:any

  constructor(
    private http:HttpClient,
    private router:Router
  ) {

    this.restoreUser()

   }


  register(newUser:Partial<iUser>){
    return this.http.post<IAccessData>(this.registerUrl, newUser)
  }

  login(authData:iLoginRequest){
    return this.http.post<IAccessData>(this.loginUrl, authData)
    .pipe(tap( accessData => {

      this.authSubject$.next(accessData)
      localStorage.setItem('accessData',JSON.stringify(accessData))

      //Recupero la data di scadenza del token
      const expDate = this.jwtHelper.getTokenExpirationDate(accessData.accessToken)

      //se c'è un errore con la data blocca la funzione
      if(!expDate) return

      //Avvio il logout automatico.
      this.autoLogout(expDate)

    }))
  }

  logout(){
    this.authSubject$.next(null)
    localStorage.removeItem('accessData')
    this.router.navigate(['/login']);
  }

  autoLogout(expDate:Date){
    // clearTimeout(this.autoLogoutTimer)
    const expMs = expDate.getTime() - new Date().getTime()

    this.autoLogoutTimer = setTimeout(()=>{
      this.logout()
    }, expMs)
  }

  restoreUser(){
    const userJson:string|null = localStorage.getItem('accessData')
    if(!userJson) return

    const accessData:IAccessData = JSON.parse(userJson)

    if(this.jwtHelper.isTokenExpired(accessData.accessToken)){
      localStorage.removeItem('accessData')
      return
    }

    this.authSubject$.next(accessData)

  }

}

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.development';
import { IAccessData } from './interfaces/i-access-data';
import { iUser } from './interfaces/i-user';
import { iLoginRequest } from './interfaces/ilogin-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService();//Permette di lavorare facilmente con JWT

  registerUrl:string = environment.registerUrl
  loginUrl:string = environment.loginUrl

  authSubject$ = new BehaviorSubject<IAccessData | null>(null)//null è il valore di default, quindi si parte con utente non loggato

  user$ = this.authSubject$.asObservable()//contiene dati sull'utente se è loggato
  .pipe(
    tap(accessData => this.isLoggedIn = !!accessData),
    map(accessData => {
      return accessData ? accessData.user : null
    })
  )

  isLoggedIn$ = this.authSubject$.asObservable()
  .pipe(map(accessData => !!accessData))//serve per la verifica, capta la presenza(o meno) dello user e mi restituisce un bool (false se il subject riceve null)


  isLoggedIn:boolean = false

  autoLogoutTimer:any//riferimento al timer che slogga l'utente quando il jwt è scaduto

  constructor(
    private http:HttpClient,//per le chiamate http
    private router:Router//per i redirect
  ) {

    this.restoreUser()//avvio questo metodo per recuperare i dati dell'utente in caso di reload

   }


  register(newUser:Partial<iUser>){
    return this.http.post<IAccessData>(this.registerUrl, newUser)
  }

  login(authData:iLoginRequest){
    return this.http.post<IAccessData>(this.loginUrl, authData)
    .pipe(tap( accessData => {

      this.authSubject$.next(accessData)//invio lo user al subject
      localStorage.setItem('accessData',JSON.stringify(accessData))//salvo lo user per poterlo recuperare se si ricarica la pagina

      //Recupero la data di scadenza del token
      const expDate:Date|null = this.jwtHelper.getTokenExpirationDate(accessData.accessToken)

      //se c'è un errore con la data blocca la funzione
      if(!expDate) return

      //Avvio il logout automatico.
      this.autoLogout(expDate)

    }))
  }

  logout(){
    this.authSubject$.next(null)//comunico al behaviorsubject che il valore da propagare è null
    localStorage.removeItem('accessData')//elimino i dati salvati in localstorage
    this.router.navigate(['/auth/login'])//redirect al login
  }

  autoLogout(expDate:Date){
    // clearTimeout(this.autoLogoutTimer) qualora volessi bloccare il timeout

    const expMs = expDate.getTime() - new Date().getTime()//sottraggo i ms della data attuale da quelli della data del jwt

    this.autoLogoutTimer = setTimeout(()=>{//avvio un timer che fa logout allo scadere del tempo
      this.logout()
    }, expMs)
  }

    //metodo che controlla al reload di pagina se l'utente è loggato e se il jwt è scaduto

  restoreUser(){
    const userJson:string|null = localStorage.getItem('accessData')//recupero i dati di accesso
    if(!userJson) return//se i dati non ci sono blocco la funzione

    const accessData:IAccessData = JSON.parse(userJson);//se viene eseguita questa riga significa che i dati ci sono, quindi converto la stringa(che conteneva un json) in oggetto

    if(this.jwtHelper.isTokenExpired(accessData.accessToken)){//ora controllo se il token è scaduto, se lo è fermiamo la funzione ed eliminamo i dati scaduti dal localStorage
      localStorage.removeItem('accessData')
      return
    }

    //se nessun return viene eseguito proseguo
    this.authSubject$.next(accessData)//invio i dati dell'utente al behaviorsubject

  }

}

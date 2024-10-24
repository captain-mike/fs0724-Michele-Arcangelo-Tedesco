import { Inject, Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authSvc: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.authSvc.authSubject$.pipe(switchMap(accessData => {

      if(!accessData){
        return next.handle(request)
      }

      const newRequest = request.clone({
        headers: request.headers.append('Authorization',`Bearer ${accessData.accessToken}`)
      })

      return next.handle(newRequest);
    }))
  }
}

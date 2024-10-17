import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = '9867t34riufbaewiofcuvn94378w5y'

    //request è immutabile

    const cloneReq = request.clone({
      headers: request.headers.append('Authorization','Bearer ' + token)
    })

    return next.handle(cloneReq);
  }
}

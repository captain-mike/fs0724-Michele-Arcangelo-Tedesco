import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { StatoService } from '../services/stato.service';

@Injectable({
  providedIn: 'root'
})
export class StatusGuard implements CanActivate {

  constructor(
    private statoSvc:StatoService
  ){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.statoSvc.status
  }

}

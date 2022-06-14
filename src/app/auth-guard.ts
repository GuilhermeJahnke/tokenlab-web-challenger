import { Injectable, HostListener, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { ENV } from "../environments/environment-variables.token";



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}













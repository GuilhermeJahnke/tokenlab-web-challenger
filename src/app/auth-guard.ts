import { Injectable, HostListener, Inject } from "@angular/core";
import { Router } from "@angular/router";
// import { Observable } from "rxjs";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { ENV } from "../environments/environment-variables.token";



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
    // public sessionStorage: SessionStorageService,
    // @Inject(ENV) public ENV: any,
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const session = JSON.parse(sessionStorage.getItem("permission"));
    // const userSession = JSON.parse(sessionStorage.getItem("currentUser_token"));
    return true;
    const session = JSON.parse(localStorage.getItem("permission"));
    const userSession = JSON.parse(localStorage.getItem("currentUser_token"));
    if (Date.now() > session._expired || Date.now() > userSession._expired) {
      // sessionStorage.clear();
      localStorage.clear();
      this.router.navigate(["/pages"]);
    } else {
      console.log(route.data);
      // if (session._value.includes(route.data.permission)) { return true; } else { console.log("voce nao tem permissao"); return false; }
      if (session.includes(route.data.permission)) { return true; } else { console.log("voce nao tem permissao"); return false; }
    }
  }
}













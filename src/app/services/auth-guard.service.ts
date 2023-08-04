import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {

  constructor(private loginService:LoginService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.loginService.isLoggedIn();
  }
}

export const IsAuthGaurd: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  => {
  return inject(AuthGuardService).canActivate(route, state);
}

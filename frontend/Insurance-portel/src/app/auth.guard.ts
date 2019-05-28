import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements  CanActivate {
constructor(private auth: AuthService,private router:Router){

}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
  }
  else{
    this.router.navigate(['/Login'])
    return false;
  }
  }
  
}

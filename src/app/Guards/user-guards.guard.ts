import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardsGuard implements CanActivate {
  constructor(private router:Router, private userService:UserAuthService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.userService.UserState;
    if(this.userService.UserState){
      return true;
    }
    else{
      alert("Please Login First")
      this.router.navigate(['/Login']);
      return false;
    }

  }
  
}

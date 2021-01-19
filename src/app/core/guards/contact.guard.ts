import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserServiceService} from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsGuard implements CanActivate {
  constructor(private routerService: Router,
              private user: UserServiceService) {
  }
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.user.has() === true ) {
      return true;
    } else {
      this.routerService.navigate(['/auth', 'login']);
    }
    return true;
  }

}

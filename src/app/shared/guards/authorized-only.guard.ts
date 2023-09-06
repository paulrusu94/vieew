import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';
import { Auth } from 'aws-amplify';

@Injectable()
export class AuthorizedOnlyGuard implements CanActivate, CanActivateChild {
  private errorHandled = false;
  
  constructor(private router: Router, private sessionService: SessionService) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return Auth.currentAuthenticatedUser()
      .then((response) => {
        console.log('Success', response);
        return true;
      })
      .catch((error) => {
        console.log('Error', error);
        if (!this.errorHandled) {
          this.errorHandled = true;
          this.router.navigate(['/login']);
        }
        return false;
      });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

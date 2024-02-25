import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';

@Injectable()
export class AuthorizedOnlyGuard {
  private errorHandled = false;
  
  constructor(private router: Router) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
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

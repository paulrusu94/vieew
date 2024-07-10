import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { getCurrentUser } from 'aws-amplify/auth';

@Injectable()
export class AuthorizedOnlyGuard {
  private errorHandled = false;
  
  constructor(private router: Router) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return getCurrentUser()
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

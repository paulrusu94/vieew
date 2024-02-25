import { Injectable } from '@angular/core';
import { Route, Router, UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';

@Injectable()
export class CanLoadGuard {
  private errorHandled = false;
  
  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated
    return Auth.currentAuthenticatedUser()
      .then((response) => {
        console.log('Success', response);
        return true;
      })
      .catch((error) => {
        console.log(error);
        if (!this.errorHandled) {
          this.errorHandled = true;
          this.router.navigate(['/login']);
        }
        return false;
      });
  }
}

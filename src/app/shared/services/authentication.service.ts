import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { autoSignIn, confirmResetPassword, confirmSignUp, resetPassword, signIn, signOut, signUp } from 'aws-amplify/auth';

@Injectable()

export class AuthenticationService {

  constructor() {}

  signIn(username: string, password: string): Observable<any> {
    return from(signIn({username, password}));
  }

  autoSignIn(): Observable<any> {
    return from(autoSignIn());
  }

  signUp(username: string, password: string, firstName: string, lastName: string): Observable<any> {
    return from(signUp({username, password, options: {
      autoSignIn: true,
      userAttributes: {
        family_name: lastName,
        given_name: firstName
      }
    }}));
  }

  confirmSignup(username: string, confirmationCode: string): Observable<any> {
    return from(confirmSignUp({username, confirmationCode }));
  }

  resetPassword(username: string): Observable<any> {
    return from(resetPassword({username}));
  }

  confirmResetPassword(username: string, newPassword: string, confirmationCode: string): Observable<any> {
    return from(confirmResetPassword({username, newPassword, confirmationCode }));
  }

  logOut() {
    return from(signOut({ global: true }));
  }
}

import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {
  autoSignIn,
  confirmResetPassword,
  confirmSignUp,
  getCurrentUser,
  resetPassword,
  signIn,
  signUp,
} from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import { Schema } from 'amplify/data/resource';

const client = generateClient<Schema>();
type User = Schema['User']['type'];

@Injectable()
export class UsersService {
  constructor() {}

  get(id: string) {
    return from(client.models.User.getUserBySub({ sub: id }));
  }

  find() {
    return from(client.models.User.list());
  }

  getCurrentCognitoUser(): Observable<any> {
    return from(getCurrentUser());
  }

  getCurrentDynamoUser(cognitoUser: any): Observable<any> {
    if (!cognitoUser || !cognitoUser.userId) {
      console.error('Cognito user is missing or invalid:', cognitoUser);
      return of(null); // Return a default observable if the user is missing
    }

    return from(client.models.User.getUserBySub({ sub: cognitoUser.userId }));
  }
}

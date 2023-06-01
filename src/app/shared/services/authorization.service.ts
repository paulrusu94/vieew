import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './api.service';
import { SessionService } from './session.service';
import { APP_API } from '../constants/api';
import { tap } from 'rxjs';

@Injectable()
export class AuthorizationService {
  constructor(
    private apiService: ApiService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  authenticate(credentials: any) {
    return this.apiService
      .post(APP_API.COGNITO_AUTH, credentials)
      .pipe(
        tap((response: any) => {
          this.sessionService.create({
            ...response,
          });
          this.router.navigate(['/']);
        })
      );
  }

  public refreshToken(accessToken: string) {
    return this.apiService
      .post(APP_API.TOKEN_REFRESH, { accessToken })
      .pipe(
        tap((response: any) => {
          this.sessionService.create({
            ...this.sessionService.get(),
            access_token: response.access_token,
          });
        }),
      );
  }

  logout() {
    return this.apiService
      .delete(APP_API.LOGOUT)
      .pipe(
        tap(() => localStorage.clear())
      );
  }

}

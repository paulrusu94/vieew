import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';

import { SESSION_KEY } from 'src/app/shared/constants/config';

import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(
    private localStorageService: LocalStorageService,
  ) {}

  private validateSession(authenticated: any) {
    const { accessToken } = authenticated;
    const decodedToken: any = accessToken ? jwtDecode(accessToken) : null;
    const now = new Date();
    if (decodedToken && (now.getTime() >= (decodedToken.exp * 1000))) {
      this.clear();
      return null;
    }

    return true;
  }

  public create(session: any): void {
    this.localStorageService.setItem(SESSION_KEY, snakecaseKeys({
      authenticated: session,
    }, { deep: true }));
  }

  public getPharmacyId() {
    const session = this.localStorageService.getItem(SESSION_KEY);
    if (session) {
      const authenticated = camelcaseKeys(session.authenticated, { deep: true });
      this.validateSession(authenticated);
      return authenticated.pharmacyId || session.pharmacy_id;
    }
    return null;
  }

  public getCustomerId() {
    const session = this.localStorageService.getItem(SESSION_KEY);
    if (session) {
      const authenticated = camelcaseKeys(session.authenticated, { deep: true });
      this.validateSession(authenticated);
      return authenticated.customerId || session.customer_id;
    }
    return null;
  }

  public getUserId() {
    const session = this.localStorageService.getItem(SESSION_KEY);
    if (session) {
      const authenticated = camelcaseKeys(session.authenticated, { deep: true });
      this.validateSession(authenticated);
      return authenticated.userId || session.user_id;
    }
    return null;
  }

  public get() {
    const session = this.localStorageService.getItem(SESSION_KEY);
    if (session) {
      const authenticated = camelcaseKeys(session.authenticated, { deep: true });
      this.validateSession(authenticated);
      return authenticated;
    }
    return null;
  }

  public clear() {
    this.localStorageService.removeItem(SESSION_KEY);
  }

}

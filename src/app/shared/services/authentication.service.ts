import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private authenticated: boolean = false;

  constructor() {}

  login(username: string, password: string): Promise<boolean> {
    // Call your authentication API here and set authenticated to true if successful
    this.authenticated = true;
    return Promise.resolve(true);
  }

  logout(): Promise<boolean> {
    // Call your logout API here and set authenticated to false
    this.authenticated = false;
    return Promise.resolve(false);
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
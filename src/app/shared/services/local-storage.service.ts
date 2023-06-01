import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private localStorage = window.localStorage as Storage;
  
  public setItem(key: string, value: any): void {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any {
    const item = this.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  public removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';

import { UsersService } from 'src/app/shared/api/users.service';

@Injectable({ providedIn: 'root' })
export class UserStore {
  private readonly curentUserSource = new BehaviorSubject<any>(null);

  readonly currentUser$ = this.curentUserSource.asObservable();

  constructor(private usersService: UsersService) {}

  public setUser(user: any): void {
    this.curentUserSource.next(user);
  }

  public fetchUser(): void {
    this.usersService
      .getCurrentCognitoUser()
      .pipe(
        switchMap((cognitoUser: any) => {
          return this.usersService.getCurrentDynamoUser(cognitoUser);
        })
      )
      .subscribe({
        next: (response: any) => {
          console.log(response)
          this.setUser(response);
        },
        error: (error: any) => {
          this.setUser({})
          console.log(error);
        },
      });
  }

  // Return the current user value directly
  public getCurrentUser(): any {
    return this.curentUserSource?.value?.data && this.curentUserSource?.value?.data[0] || null;
  }
}

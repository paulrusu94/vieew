import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { UsersService } from '../api/users.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolver {
  constructor(private usersService: UsersService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const profileId = route.paramMap.get('profile') as string;

    return this.usersService.get(profileId).pipe(
      switchMap((profiles: any) => {
        if (!profiles.data.length) {
          this.router.navigate(['/']);
          // Return an error if profiles is empty or null
          return throwError(() => new Error('User profile not found'));

        }
        return of(profiles);
      }),
      catchError((error) => {
        console.error('Error fetching user profile:', error);
        this.router.navigate(['/']);
        return of(null); // Return an observable of null in case of error
      })
    );
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserStore } from 'src/app/shared/store/user.store';

@Component({
  selector: '[appLayout]',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class SecuredLayoutComponent implements OnInit, OnDestroy {
  public loading = true;
  public currentUser: any;

  constructor(private userStore: UserStore) {}

  ngOnInit() {
    // Fetch user only once here
    this.userStore.fetchUser();

    // Listen for when the user data becomes available to stop loading
    this.userStore.currentUser$.subscribe({
      next: (user) => {
        if (user) {
          this.loading = false;  // Stop loading when user data is available
        }
      },
      error: (error) => {
        console.log(error);
        this.loading = false;  // Stop loading even if there's an error
      }
    });
  }

  ngOnDestroy() {}
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'aws-cdk-lib/aws-iam';
import { UserStore } from 'src/app/shared/store/user.store';

@Component({
  selector: '[appSecured]',
  templateUrl: './secured-layout.component.html',
  styleUrls: ['./secured-layout.component.scss'],
})
export class SecuredLayoutComponent implements OnInit, OnDestroy {
  public currentUser: any;

  constructor(private userStore: UserStore) {}

  ngOnInit() {
    this.userStore.currentUser$.subscribe({
      next: (user) => {
        if (!user) {
          this.userStore.fetchUser();
          return;
        }

        this.currentUser = user.data[0];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy() {}
}

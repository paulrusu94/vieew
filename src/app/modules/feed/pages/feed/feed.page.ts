import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: '[appFeed]',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit, OnDestroy {
  private errorHandled = false;

  public isAuthenticated: boolean = false;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    // Auth.currentAuthenticatedUser()
    //   .then((response) => {
    //     this.isAuthenticated = true;
    //   })
    //   .catch((error) => {
    //     console.log('Error', error);
    //     if (!this.errorHandled) {
    //       this.errorHandled = true;
    //       this.isAuthenticated = false;
    //     }
    //   });
  }

  async logOut() {
    try {
      await Auth.signOut({ global: true });
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  
  ngOnDestroy() {}
}

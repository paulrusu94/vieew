import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signOut, getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';

@Component({
  selector: '[appFeed]',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit, OnDestroy {
  private errorHandled = false;
  public email = '';
  public isAuthenticated: boolean = false;

  constructor(
    private router: Router,
  ) {}

  async ngOnInit() {
    const userAttributes = await fetchUserAttributes()
    this.email = userAttributes.email!
  }

  async logOut() {
    try {
      await signOut({ global: true });
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  
  ngOnDestroy() {}
}

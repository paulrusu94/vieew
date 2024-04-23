import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: '[appProfile]',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  private errorHandled = false;
  
  public profile: string = '';
  public isAuthenticated: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.profile = this.route.snapshot.params['profile'];
    Auth.currentAuthenticatedUser()
      .then((response) => {
        this.isAuthenticated = true;
      })
      .catch((error) => {
        console.log('Error', error);
        if (!this.errorHandled) {
          this.errorHandled = true;
          this.isAuthenticated = false;
        }
      });
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

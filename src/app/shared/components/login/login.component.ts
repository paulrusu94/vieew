import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'Login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isLoading = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: RouterExtensions
  ) {}

  ngOnInit() {}

  onLogin() {
    this.isLoading = true;
    this.authenticationService.login(this.username, this.password).then(
      () => {
        this.isLoading = false;
        this.router.navigate(['/home'], { clearHistory: true });
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  onSignup() {
    this.router.navigate(['/register'], { clearHistory: true });
  }
}

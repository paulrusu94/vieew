import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'Register',
  templateUrl: './register.component.html',
})

export class RegisterComponent {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  isLoading: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: RouterExtensions
  ) {}

  onRegister() {
    // Perform register logic here, e.g. calling an API to create a new user
    this.isLoading = true;
    this.authenticationService.login(this.name, this.password).then(
      () => {
        this.isLoading = false;
        this.router.navigate(['/home'], { clearHistory: true });
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    );

    // Once register is complete, navigate to the home page
    this.router.navigateByUrl('/home');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}


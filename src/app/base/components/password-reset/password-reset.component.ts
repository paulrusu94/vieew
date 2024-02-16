import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from 'aws-amplify';
import { Subject, OperatorFunction, Observable, debounceTime, distinctUntilChanged, filter, merge, map } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';


@Component({
  selector: '[appPasswordReset]',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit, OnDestroy {
  
  public passwordRequestForm: FormGroup;
  public passwordResetForm: FormGroup;
  public email: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {

    this.passwordRequestForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
    });

    this.passwordResetForm = this.formBuilder.group({
      email: [this.route.snapshot.queryParams['email'], Validators.compose([Validators.required])],
      code: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.email = this.route.snapshot.queryParams['email'];
    console.log(this.email);
  }

  async onSubmitPasswordRequest() {
    try {
      const { email } = this.passwordRequestForm.value;
      
      await Auth.forgotPassword(email);

      this.email = email;
      this.router.navigate(['/password-reset'], { 
        queryParams: { email },
        onSameUrlNavigation: 'reload' 
      });
      this.passwordResetForm.get('email')?.setValue(this.email);

    } catch (error) {
      console.log('error signing up:', error);
      this.notificationService.notify({
        text: error,
        icon: 'error'
      });
    }
  }

  async onSubmitPasswordReset() {
    try {
      const { email, code, password} = this.passwordResetForm.value;
      
      await Auth.forgotPasswordSubmit(email, code, password);

      this.router.navigate(['/login']);
    } catch (error) {
      console.log('error signing up:', error);
      this.notificationService.notify({
        text: error,
        icon: 'error'
      });
    }
  }

  ngOnDestroy() { }
}

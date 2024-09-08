import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { resetPassword, confirmResetPassword } from 'aws-amplify/auth';

@Component({
  selector: '[appForgotPasswordDialog]',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss']
})
export class ForgotPasswordDialogComponent {

  public step: string = 'REQUEST';
  public requestPasswordReset: FormGroup;
  public passwordReset: FormGroup;
  public errorMessages: any;
  public serverError: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) {
    this.requestPasswordReset = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email()])],
    });

    this.passwordReset = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email()])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      confirmationCode: ['', Validators.compose([Validators.required])],
    }, {
      validator: Validators.MatchPassword
    });
  }

  private forceValidation(form: FormGroup) {
    const controls = form.controls;

    Object.keys(controls).map(key => controls[key].markAllAsTouched());

    this.errorMessages = ValidationMessagesBuilder.buildValidationMessages(form);
  }

  async onSubmitRequest() {
    this.serverError = '';
    this.forceValidation(this.requestPasswordReset);

    if(this.requestPasswordReset.valid) {
      const { email } = this.requestPasswordReset.value;
      try {
        const { nextStep } = await resetPassword({username: email });
        if(nextStep.resetPasswordStep === 'CONFIRM_RESET_PASSWORD_WITH_CODE') {
          this.step = 'RESET';
        }

      } catch (error: any) {
        this.serverError = error.message;
      }
    }
  }

  async onSubmitReset() {
    this.serverError = '';
    this.forceValidation(this.passwordReset);
    if(this.passwordReset.valid) {
      const { email, password, confirmationCode } = this.passwordReset.value;
      try {
        const confirmation = await confirmResetPassword({username: email, newPassword: password, confirmationCode });
        console.log(confirmation);
        this.step = 'COMPLETE';
      } catch (error: any) {
        this.serverError = error.message;
      }
    }
  }
  
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ModalService } from '../../services/modal.service';
import { LoginDialogComponent } from '../login/login-dialog.component';

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
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
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

      this.authenticationService.resetPassword(email).subscribe({
        next: (response: any) => {
          const { nextStep } = response;

          if(nextStep.resetPasswordStep === 'CONFIRM_RESET_PASSWORD_WITH_CODE') {
            this.step = 'RESET';
          }
        },
        error: (error: any) => {
          this.serverError = error.message;
        },
      });
    }
  }

  async onSubmitReset() {
    this.serverError = '';
    this.forceValidation(this.passwordReset);
    if(this.passwordReset.valid) {
      const { email, password, confirmationCode } = this.passwordReset.value;

      this.authenticationService.confirmResetPassword(email, password, confirmationCode).subscribe({
        next: _ => {
          this.step = 'COMPLETE';
        },
        error: (error: any) => {
          this.serverError = error.message;
        },
      });
    }
  }

  public openLogin(): void {
    const dialog = this.modalService.open(LoginDialogComponent, { size: 'md' });
    dialog.result.then(
      () => { },
      () => { },
    );
    this.activeModal.dismiss();
  }
  
}

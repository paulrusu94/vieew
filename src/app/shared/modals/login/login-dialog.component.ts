import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { RegisterDialogComponent } from '../register/register-dialog.component';
import { ConfirmDialogComponent } from '../confirm/confirm-dialog.component';
import { ForgotPasswordDialogComponent } from '../forgot-password/forgot-password-dialog.component';
// Services
import { ModalService } from 'src/app/shared/services/modal.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: '[appLoginDialog]',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
  providers: [],
})
export class LoginDialogComponent implements OnInit, OnDestroy {
  
  public loginWithEmail: boolean = false;
  public form: FormGroup;
  public errorMessages: any;
  public serverError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private modalService: ModalService,
    private authenticationService: AuthenticationService
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email()])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {}

  handleLoginWithEmail() {
    this.loginWithEmail = true;
  }

  private forceValidation() {
    const controls = this.form.controls;

    Object.keys(controls).map(key => controls[key].markAllAsTouched());

    this.errorMessages = ValidationMessagesBuilder.buildValidationMessages(this.form);
  }

  async onSubmit() {
    this.serverError = '';
    this.forceValidation();

    if(this.form.valid) {
      const { email, password } = this.form.value;

      this.authenticationService.signIn(email, password).subscribe({
        next: (response: any) => {
          const { isSignedIn, nextStep } = response;
          if(!isSignedIn && nextStep.signInStep === 'CONFIRM_SIGN_UP') {
            this.openConfirm();
            return;
          }

          window.location.reload();
        },
        error: (error: any) => {
          this.serverError = error;
          this.form.reset();
        },
      });
    }
   
  }

  public openConfirm(): void {
    const dialog = this.modalService.open(ConfirmDialogComponent, { size: 'md' });
    dialog.componentInstance.email = this.form.value.email;
    dialog.componentInstance.password = this.form.value.password;
    dialog.result.then(
      () => { },
      () => { },
    );
    this.activeModal.close();
  }

  public openRegister(): void {
    const dialog = this.modalService.open(RegisterDialogComponent, { size: 'md' });
    dialog.result.then(
      () => { },
      () => { },
    );
    this.activeModal.close();
  }

  public openForgotPassword() {
    const dialog = this.modalService.open(ForgotPasswordDialogComponent, { size: 'md'});
    dialog.result.then(
      () => {},
      () => {},
    );
    this.activeModal.close();
  }
  ngOnDestroy() {}
}

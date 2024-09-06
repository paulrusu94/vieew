import { Component, OnInit, OnDestroy, Input, input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { signIn, confirmSignUp } from 'aws-amplify/auth';
import { RegisterDialogComponent } from '../register/register-dialog.component';
// Services
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: '[appForgotPasswordDialog]',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss'],
  providers: [],
})
export class ForgotPasswordDialogComponent implements OnInit, OnDestroy {
  @Input() email: string = '';
  @Input() password: string = ''; 
  public form: FormGroup;
  public serverError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private modalService: ModalService
  ) {
    this.form = this.formBuilder.group({
      verificationCode: ['', Validators.compose([Validators.required, Validators.email()])],
    });
  }

  ngOnInit() {
    console.log(this.email);
  }

  async onSubmit() {
    this.serverError = '';
    const { verificationCode } = this.form.value;
    try {
      const {userId, isSignUpComplete, nextStep } = await confirmSignUp({username: this.email, confirmationCode: verificationCode });
      if(isSignUpComplete && nextStep.signUpStep === 'DONE') {
        try {
          const signInTheUser = await signIn({username: this.email, password: this.password})
          if(signInTheUser) {
            window.location.reload();
          }
        } catch(error) {
          console.log(error);
        }
      }
    } catch (error: any) {
      this.serverError = error.message;
      this.form.reset();
    }
  }

  public openRegister(): void {
    const dialog = this.modalService.open(RegisterDialogComponent, { size: 'md' });
    dialog.result.then(
      () => { },
      () => { },
    );
  }

  ngOnDestroy() {}
}

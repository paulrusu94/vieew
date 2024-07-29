import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { signIn } from 'aws-amplify/auth';
import { RegisterDialogComponent } from '../register/register-dialog.component';
import { ConfirmDialogComponent } from '../confirm/confirm-dialog.component';
// Services
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: '[appLoginDialog]',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
  providers: [],
})
export class LoginDialogComponent implements OnInit, OnDestroy {
  public loginWithEmail: boolean = false;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private modalService: ModalService
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

  async onSubmit() {
    // console.log(this.form);
    // return;
    const { email, password } = this.form.value;
    try {
      const {isSignedIn, nextStep } = await signIn({username: email, password});
      
      if(!isSignedIn && nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        this.openConfirm();
      }
      
    } catch (error) {
      console.log('error logging in', error);
    }
  }

  public openConfirm(): void {
    const dialog = this.modalService.open(ConfirmDialogComponent, { size: 'md' });
    dialog.componentInstance.email = this.form.value.email;
    dialog.result.then(
      () => { },
      () => { },
    );
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

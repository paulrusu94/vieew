import { Component, OnInit, OnDestroy, Input, input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { RegisterDialogComponent } from '../register/register-dialog.component';
// Services
import { ModalService } from 'src/app/shared/services/modal.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: '[appConfirmDialog]',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  providers: [],
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {
  @Input() email: string = '';
  @Input() password: string = ''; 
  public form: FormGroup;
  public serverError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private modalService: ModalService,
    private authenticationService: AuthenticationService
  ) {
    this.form = this.formBuilder.group({
      confirmationCode: ['', Validators.compose([Validators.required, Validators.email()])],
    });
  }

  ngOnInit() {
    console.log(this.email);
  }

  async onSubmit() {
    this.serverError = '';
    const { confirmationCode } = this.form.value;

    this.authenticationService.confirmSignup(this.email, confirmationCode)
    .pipe(
      switchMap((confirmSignup: any) => {
        console.log(confirmSignup);
        const { nextStep } = confirmSignup;
        
        if(nextStep.signUpStep === 'COMPLETE_AUTO_SIGN_IN') {
          return this.authenticationService.autoSignIn();
        }

        return this.authenticationService.signIn(this.email, this.password);
      }),
    )
    .subscribe({
      next: (response: any) => {
        window.location.reload();
      },
      error: (error: any) => {
        this.serverError = error.message;
        this.form.reset();
      },
    });
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

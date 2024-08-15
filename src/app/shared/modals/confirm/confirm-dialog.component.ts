import { Component, OnInit, OnDestroy, Input, input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { signIn, confirmSignUp } from 'aws-amplify/auth';
import { RegisterDialogComponent } from '../register/register-dialog.component';
// Services
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: '[appConfirmDialog]',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  providers: [],
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {
  @Input() email: string = ''; 
  public form: FormGroup;

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
    // console.log(this.form);
    // return;
    const { verificationCode } = this.form.value;
    try {
      const {userId, isSignUpComplete, nextStep } = await confirmSignUp({username: this.email, confirmationCode: verificationCode });
      if(isSignUpComplete && nextStep.signUpStep === 'DONE') {
        this.activeModal.close({
           
        })
      }
    } catch (error) {
      console.log('error confirming in', error);
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

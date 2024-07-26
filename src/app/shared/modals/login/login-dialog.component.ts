import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { RegisterDialogComponent } from '../register/register-dialog.component';
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

  onSubmit() {
    console.log('SUBMIT');
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

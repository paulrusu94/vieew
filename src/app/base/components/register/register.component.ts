import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';

@Component({
  selector: '[appRegister]',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  public form: FormGroup;
  public errorMessages: any;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.email()])],
      password: [null, Validators.compose([Validators.required])],
      confirmPassword: [null, Validators.compose([Validators.required])],
    },
    {
      validator: Validators.MatchPassword,
    });

    this.form.valueChanges
      .pipe(takeUntil(this._unsubscribe))
      .subscribe((form) => {
        this.errorMessages = ValidationMessagesBuilder.buildValidationMessages(this.form);
      });
  }

  ngOnInit() {}

  private forceValidation() {
    const controls = this.form.controls;

    Object.keys(controls).map((key) => controls[key].markAllAsTouched());

    this.errorMessages = ValidationMessagesBuilder.buildValidationMessages(this.form);
  }

  public handleSubmit() {
    this.forceValidation();
    if (this.form.valid) {
      console.log('FORM SUBMITED');
      console.log(this.form);
      return;
    }

    alert('FORM IS NOT VALID!');
  }

  ngOnDestroy() {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: '[appLogin]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email()])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    // console.log(this.form);
    // return;
    const { email, password } = this.form.value;
    try {
      const user = await Auth.signIn({username: email, password});
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  ngOnDestroy() {}
}

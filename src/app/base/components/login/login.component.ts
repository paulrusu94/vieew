import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { APIService } from 'src/app/API.service';

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
    private apiService: APIService
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
      const { attributes } = user;
      let dynamoUser = await this.apiService.GetUser(attributes.sub);
      console.log(dynamoUser);
      if(!dynamoUser) {
        dynamoUser = await this.apiService.CreateUser({
          id: attributes.sub,
          email: attributes.email,
        })
      }
      // const dynamoUser = await this.apiService.CreateService
      console.log(user);
      console.log(dynamoUser);
      this.router.navigate(['/']);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  ngOnDestroy() {}
}

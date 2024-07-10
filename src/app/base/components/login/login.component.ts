import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { Router } from '@angular/router';
// import { signIn } from 'aws-amplify/auth';
// import { generateClient,  } from 'aws-amplify/api';
// import { getUser } from 'src/graphql/queries';
// import { createUser } from 'src/graphql/mutations';

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
  //   try {
  //     const user = await signIn({username: email, password});
  //     console.log("Logedin user:", user)
  //     const { attributes } = user as any;

  //     const client = generateClient()
  //     let dynamoUser: any = await client.graphql({query: getUser})
  //     console.log(dynamoUser);
  //     if(!dynamoUser) {
  //       dynamoUser = await client.graphql({query: createUser, variables: {
  //         id: attributes.sub,
  //         email: attributes.email,
  //     } as any})
  //   }
  //     this.router.navigate(['/']);
  //   } catch (error) {
  //     console.log('error signing in', error);
  //   }
  }

  ngOnDestroy() {}
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getCurrentUser, signIn, confirmSignIn} from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';

@Component({
  selector: '[appConfirm]',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit, OnDestroy {


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      const token = params['idToken'];
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]))
          const email = payload['email'];
          await signIn({
            username: email, 
            options: {
              authFlowType: "CUSTOM_WITHOUT_SRP",
              // clientMetadata: payload
            }
          });
          const NO_SRP_CHALLENGE_ANSWEAR = "nuareparola" // needs to be added in another lambda that has this value encapsulated in env vars
          await confirmSignIn({challengeResponse: NO_SRP_CHALLENGE_ANSWEAR })
          

        } catch (error) {
          console.error('Error signing in user', error);
        }
      }
    });
  }


  ngOnDestroy() { }
}

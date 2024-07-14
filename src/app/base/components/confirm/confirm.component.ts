import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { autoSignIn, confirmSignUp, getCurrentUser} from 'aws-amplify/auth';


@Component({
  selector: '[appConfirm]',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit, OnDestroy {


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      const payload = JSON.parse(atob(params['v']));
      const code = params['code'];
      console.log(payload)

      if (code && payload) {
        try {
          const {userName} = payload;
          
          const {userId, isSignUpComplete, nextStep } = await confirmSignUp({username: userName, confirmationCode: code });
          console.log(userId, isSignUpComplete, nextStep)
          const x = await autoSignIn();
          console.log(x)
         
          

        } catch (error) {
          console.error('Error signing in user', error);
        }
      }
    });
  }


  ngOnDestroy() { }
}

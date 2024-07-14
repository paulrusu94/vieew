import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { signUp, SignUpOutput } from 'aws-amplify/auth';
import { Subject, OperatorFunction, Observable, debounceTime, distinctUntilChanged, filter, merge, map } from 'rxjs';

const industries = [
  'Aerospace',
  'Agriculture',
  'Automotive',
  'Biotechnology',
  'Chemical',
  'Construction',
  'Consumer Electronics',
  'Consumer Goods',
  'Defense',
  'Education',
  'Energy',
  'Environmental',
  'Fashion',
  'Finance',
  'Food and Beverage',
  'Healthcare',
  'Hospitality',
  'Information Technology',
  'Insurance',
  'Manufacturing',
  'Media and Entertainment',
  'Mining',
  'Oil and Gas',
  'Pharmaceutical',
  'Real Estate',
  'Retail',
  'Telecommunications',
  'Transportation',
  'Utilities',
  'Water and Wastewater',
  'Advertising',
  'Architecture',
  'Art and Design',
  'Biomedical',
  'Consulting',
  'E-commerce',
  'Fitness and Wellness',
  'Government',
  'Legal',
  'Logistics',
  'Marketing',
  'Nonprofit',
  'Research',
  'Social Services',
  'Technology',
  'Tourism',
  'Web Development',
  'Other'
];

@Component({
  selector: '[appRegister]',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  @ViewChild('instance', { static: true })

  public instance: NgbTypeahead = new NgbTypeahead;
  public form: FormGroup;
  public model: any;
  public step: number = 1;

  public focus$ = new Subject<string>();
  public click$ = new Subject<string>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email()])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      accountType: ['personal', Validators.compose([Validators.required])],
    }, {
      validator: Validators.MatchPassword
    });
  }

  ngOnInit() { }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance?.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === '' ? industries : industries.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10),
      ),
    );
  };

  async onSubmit() {
    try {
      const { email, password, firstName, lastName } = this.form.value;
      const {
        isSignUpComplete,
        userId,
        nextStep
      }: SignUpOutput = await signUp({
                                    username: email,
                                    password: password,
                                    options: {
                                      autoSignIn: {authFlowType: 'USER_SRP_AUTH', clientMetadata: { email, firstName, lastName}},
                                      userAttributes: {
                                        family_name: lastName,
                                        given_name: firstName
                                      }
                                    }
                                  });

      console.log(isSignUpComplete, userId, nextStep)

      if (isSignUpComplete && nextStep.signUpStep) {
        // this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  goToNextStep(step: 'previous' | 'next') {
    if (step === 'next' && this.step < 3) {
      this.step = this.step + 1;
      console.log(this.step);
    } else if (step === 'previous' && (this.step > 1 || this.step <= 3)) {
      this.step = this.step - 1;
      console.log(this.step);
    } else {
      alert('Ho n-ai ave noroc, unde vrei sa meri?')
      return;
    }
  }

  onSelectIndustry(event: any) {
    console.log(event);
    this.form.get('industry')?.setValue(event.item);
  }

  ngOnDestroy() { }
}

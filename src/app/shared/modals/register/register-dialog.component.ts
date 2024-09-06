import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { signIn, confirmSignUp, ConfirmSignUpOutput, signUp, SignUpOutput } from 'aws-amplify/auth';
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

enum REGISTER_FORM_STEPTS {
  REGISTER = "REGISTER", CONFIRM = "CONFIRM"
}

@Component({
  selector: '[appRegisterDialog]',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
})
export class RegisterDialogComponent implements OnInit, OnDestroy {
  @ViewChild('instance', { static: true })
  public instance: NgbTypeahead = new NgbTypeahead;
  public formRegister: FormGroup;
  public formConfirmation: FormGroup;
  public step = "REGISTER";
  public user: any = {};
  public errorMessages: any;
  public serverError: string = '';

  public focus$ = new Subject<string>();
  public click$ = new Subject<string>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {
    this.formRegister = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email()])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      agreeWithTerms: [false, Validators.compose([Validators.requiredTrue])],
    }, {
      validator: Validators.MatchPassword
    });

    this.formConfirmation = this.formBuilder.group({
      confirmationCode: ['', Validators.compose([Validators.required])],
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

  private forceValidation() {
    const controls = this.formRegister.controls;

    Object.keys(controls).map(key => controls[key].markAllAsTouched());

    this.errorMessages = ValidationMessagesBuilder.buildValidationMessages(this.formRegister);
  }

  async onSubmitRegister() {
    this.serverError = '';
    this.forceValidation();
    console.log(this.errorMessages);
    if(this.formRegister.valid) {
      try {
        const { email, password, firstName, lastName } = this.formRegister.value;
        const { nextStep }: SignUpOutput = await signUp({
          username: email,
          password: password,
          options: {
            autoSignIn: true,
            userAttributes: {
              family_name: lastName,
              given_name: firstName
            }
          }
        });
  
        if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
          this.user = {email, firstName, lastName};
          this.step = REGISTER_FORM_STEPTS.CONFIRM;
        }

      } catch (error: any) {
        this.serverError = error.message;
        this.formRegister.reset();
      }
    }
  }

  async onSubmitConfirm() {
    try {
      const { confirmationCode } = this.formConfirmation.value;
      const { isSignUpComplete }: ConfirmSignUpOutput = await confirmSignUp({
        username: this.user.email, confirmationCode
      });

      try {
        const signInTheUser = await signIn({username: this.formRegister.value.email, password: this.formRegister.value.password})
        if(signInTheUser) {
          window.location.reload();
        }
      } catch(error) {
        console.log(error);
      }

    } catch (error) {
      console.log('error signing up:', error);
    }
  }


  ngOnDestroy() { }
}

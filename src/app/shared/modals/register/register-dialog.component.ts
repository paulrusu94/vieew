import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject, OperatorFunction, Observable, debounceTime, distinctUntilChanged, filter, merge, map } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { ConfirmDialogComponent } from '../confirm/confirm-dialog.component';
import { AuthenticationService } from '../../services/authentication.service';

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
  selector: '[appRegisterDialog]',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
})
export class RegisterDialogComponent implements OnInit, OnDestroy {
  @ViewChild('instance', { static: true })
  public instance: NgbTypeahead = new NgbTypeahead;
  public form: FormGroup;
  public user: any = {};
  public errorMessages: any;
  public serverError: string = '';

  public focus$ = new Subject<string>();
  public click$ = new Subject<string>();

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    public activeModal: NgbActiveModal,
    private authenticationService: AuthenticationService,
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email()])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      agreeWithTerms: [false, Validators.compose([Validators.requiredTrue])],
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

  private forceValidation() {
    const controls = this.form.controls;

    Object.keys(controls).map(key => controls[key].markAllAsTouched());

    this.errorMessages = ValidationMessagesBuilder.buildValidationMessages(this.form);
  }

  async onSubmit() {
    this.serverError = '';
    this.forceValidation();
    if(this.form.valid) {
      const { email, password, firstName, lastName } = this.form.value;
      this.authenticationService.signUp(email, password, firstName, lastName).subscribe({
        next: (response) => {
          const { nextStep } = response;

          if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
            this.user = {email, firstName, lastName};
            this.openConfirm();
          }
        },
        error: (error) => {
          this.serverError = error.message;
          this.form.reset();
        },
      });
    }
  }

  public openConfirm(): void {
    const dialog = this.modalService.open(ConfirmDialogComponent, { size: 'md' });
    dialog.componentInstance.email = this.form.value.email;
    dialog.componentInstance.password = this.form.value.password;
    dialog.result.then(
      () => { },
      () => { },
    );
    this.activeModal.close();
  }

  ngOnDestroy() { }
}

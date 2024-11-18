import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, ValidationMessagesBuilder } from 'src/app/shared/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[appUpgradeAccountDialog]',
  templateUrl: './upgrade-account-dialog.component.html',
  styleUrls: ['./upgrade-account-dialog.component.scss'],
})
export class UpgradeAccountDialogComponent implements OnInit, OnDestroy {
  
  public step: string = 'select';
  public form: FormGroup;
  public errorMessages: any;
  public serverError: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      industry: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {}

  private forceValidation() {
    const controls = this.form.controls;

    Object.keys(controls).map(key => controls[key].markAllAsTouched());

    this.errorMessages = ValidationMessagesBuilder.buildValidationMessages(this.form);
  }

  async onSubmit() {
    this.serverError = '';
    this.forceValidation();
    if(this.form.valid) {
      // SEND THE DATA TO SERVER IN ORDER TO UPGRAGE THE ACCOUNT
      console.log(this.form);
      this.step = 'success';
    }
  }

  selectOption(step: string, selectedOption: string) {
    this.step = step;
    if(this.step === 'form' && selectedOption !== 'vieewer') {
      this.form.addControl('name', this.formBuilder.control(null, Validators.compose([Validators.required])));
      this.form.addControl('username', this.formBuilder.control(null, Validators.compose([Validators.required])));
      this.form.addControl('picture', this.formBuilder.control(null, Validators.compose([Validators.required])));
    } else {
      this.form.removeControl('name');
      this.form.removeControl('username');
      this.form.removeControl('picture');
    }
  }

  goBack() {
    this.step = 'select';
  }
  
  ngOnDestroy() {}
}

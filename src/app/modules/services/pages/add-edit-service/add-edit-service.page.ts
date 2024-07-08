import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: '[appAddEditServicesPage]',
  templateUrl: './add-edit-service.page.html',
  styleUrls: ['./add-edit-service.page.scss'],
})
export class AddEditServicesPage implements OnInit, OnDestroy {
  public _unsubscribe: Subject<boolean> = new Subject<boolean>();
  
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {}

  onSubmit() {
   
  }
  
  ngOnDestroy() {}
}

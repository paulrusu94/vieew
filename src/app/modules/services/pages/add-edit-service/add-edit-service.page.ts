import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: '[appAddEditServicesPage]',
  templateUrl: './add-edit-service.page.html',
  styleUrls: ['./add-edit-service.page.scss'],
})
export class AddEditServicesPage implements OnInit, OnDestroy {

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}
  
  ngOnDestroy() {}
}

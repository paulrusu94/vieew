import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[appServicePage]',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit, OnDestroy {

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}
  
  ngOnDestroy() {}
}

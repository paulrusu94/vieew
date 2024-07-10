import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';;

@Component({
  selector: '[appServicesPage]',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit, OnDestroy {

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}
  
  ngOnDestroy() {}
}

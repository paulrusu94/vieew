import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[appConfirm]',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit, OnDestroy {


  constructor(private router: Router) {}

  ngOnInit() {
    console.log("salsal")
    // Navigate to feed page after confirming
    // this.router.navigate(['/']);
  }
  

  ngOnDestroy() {}
}

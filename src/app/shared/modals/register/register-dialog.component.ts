import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[appRegisterDialog]',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
  providers: [],
})
export class RegisterDialogComponent implements OnInit, OnDestroy {
  @Input() feed: any;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {}
}

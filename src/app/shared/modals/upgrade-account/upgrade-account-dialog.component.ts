import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[appUpgradeAccountDialog]',
  templateUrl: './upgrade-account-dialog.component.html',
  styleUrls: ['./upgrade-account-dialog.component.scss'],
})
export class UpgradeAccountDialogComponent implements OnInit, OnDestroy {
  
  public selectedOption: number | null = null;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {}

  selectOption(option: number) {
    this.selectedOption = option;
  }

  goBack() {
    this.selectedOption = null;
  }
  
  ngOnDestroy() {}
}

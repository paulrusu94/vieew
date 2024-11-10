import { Component, OnDestroy, OnInit } from '@angular/core';
import { UpgradeAccountDialogComponent } from 'src/app/shared/modals/upgrade-account/upgrade-account-dialog.component';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: '[appSideNavigation]',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit, OnDestroy {

  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit() {}

  public openUpgradeAccount(): void {
    const dialog = this.modalService.open(UpgradeAccountDialogComponent, { size: 'md' });
    dialog.result.then(
      () => { },
      () => { },
    );
  }

  ngOnDestroy() {}
}

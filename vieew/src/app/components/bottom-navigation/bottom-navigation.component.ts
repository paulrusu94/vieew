import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchDialogComponent } from 'src/app/shared/modals/search/search-dialog.component';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: '[appBottomNavigation]',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent implements OnInit, OnDestroy {

  constructor(
    private modalService: ModalService,
  ) {}

  ngOnInit() {}

  openSearch() {
    const dialog = this.modalService.open(SearchDialogComponent, {fullscreen: true});
    // dialog.componentInstance.reload = this.getAllergies;
    dialog.result.then(
      () => {
      },
      () => {},
    );
  }

  ngOnDestroy() {}
}

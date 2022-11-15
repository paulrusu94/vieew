import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[appSearchDialog]',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
})
export class SearchDialogComponent implements OnInit, OnDestroy {
  public search: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('Modal inited');
  }

  handleSearch() {
    this.router.navigate(['/search'], { queryParams: { query: this.search } });
    console.log(this.search);
  }

  ngOnDestroy() {}
}

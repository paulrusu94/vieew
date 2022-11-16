import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[appMediaPlayerDialog]',
  templateUrl: './media-player-dialog.component.html',
  styleUrls: ['./media-player-dialog.component.scss'],
})
export class MediaPlayerDialogComponent implements OnInit, OnDestroy {
  @Input() media: any
  public search: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.media);
  }

  handleSearch() {
    this.router.navigate(['/search'], { queryParams: { query: this.search } });
    this.activeModal.close();
    console.log(this.search);
  }

  ngOnDestroy() {}
}

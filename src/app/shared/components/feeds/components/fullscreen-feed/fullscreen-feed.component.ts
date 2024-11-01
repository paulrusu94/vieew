import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[appFullScreenFeed]',
  templateUrl: './fullscreen-feed.component.html',
  styleUrls: ['./fullscreen-feed.component.scss'],
  providers: [],
})
export class FullScreenFeedComponent implements OnInit, OnDestroy {
  @Input() post: any;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {}
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FullScreenFeedComponent } from './components/fullscreen-feed/fullscreen-feed.component';

@Component({
  selector: '[appFeeds]',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit, OnDestroy {
  @Input() posts: any;

  constructor(
    private modalService: ModalService,
  ) {}

  ngOnInit() {}

  public goFullScreen(post: any): void {
    const dialog = this.modalService.open(FullScreenFeedComponent, { fullscreen: true });
    dialog.componentInstance.post = post;
    dialog.result.then(
      () => { },
      () => { },
    );
  }

  ngOnDestroy() {}
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedDataService } from 'src/app/shared/api/feed-data.service';
import { MediaPlayerDialogComponent } from 'src/app/shared/modals/media-player/media-player-dialog.component';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: '[appFeedPage]',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

export class FeedPage implements OnInit {
  public feed$: Observable<any>;
  public index = 0;

  constructor(
    private modalService: ModalService,
    private feedDataService: FeedDataService
  ) {
    this.feed$ = this.feedDataService.feed$.asObservable();
  }

  ngOnInit() {
    this.feedDataService.init();
  }

  openMediaPlayer(media: any) {
    const dialog = this.modalService.open(MediaPlayerDialogComponent, {fullscreen: true});
    dialog.componentInstance.media = media;
    dialog.result.then(
      () => {
      },
      () => {},
    );
  }

  ngOnDestroy() {}
}

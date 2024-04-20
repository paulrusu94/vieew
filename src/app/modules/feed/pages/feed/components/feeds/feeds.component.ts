import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FullScreenFeedComponent } from './components/fullscreen-feed/fullscreen-feed.component';
// Amplify
import { DataStore } from 'aws-amplify';
import { Post } from 'src/models';

@Component({
  selector: '[appFeeds]',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit, OnDestroy {

  public feeds = [
    {
      'author': 'John',
      'avatar': 'https://source.unsplash.com/collection/happy-people',
      'timestamp': 'July 17 at 1:23 pm',
      'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      'author': 'Mike',
      'avatar': 'https://source.unsplash.com/random/1',
      'timestamp': 'May 24 at 1:23 pm',
      'content': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      'author': 'John',
      'avatar': 'https://source.unsplash.com/collection/happy-people',
      'timestamp': 'July 17 at 1:23 pm',
      'content': 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id velit sed lacus fringilla laoreet.'
    },
    {
      'author': 'Mike',
      'avatar': 'https://source.unsplash.com/random/1',
      'timestamp': 'May 24 at 1:23 pm',
      'content': 'Sed commodo nisl eget magna sodales, vel tempor eros dapibus.'
    },
    {
      'author': 'John',
      'avatar': 'https://source.unsplash.com/collection/happy-people',
      'timestamp': 'July 17 at 1:23 pm',
      'content': 'Integer vitae est vitae augue tincidunt fermentum.'
    },
    {
      'author': 'Mike',
      'avatar': 'https://source.unsplash.com/random/1',
      'timestamp': 'May 24 at 1:23 pm',
      'content': 'Quisque vehicula lorem id eros egestas, vel bibendum lacus semper.'
    },
    {
      'author': 'John',
      'avatar': 'https://source.unsplash.com/collection/happy-people',
      'timestamp': 'July 17 at 1:23 pm',
      'content': 'Nam vehicula elit sed lorem convallis, id gravida odio auctor.'
    },
    {
      'author': 'Mike',
      'avatar': 'https://source.unsplash.com/random/1',
      'timestamp': 'May 24 at 1:23 pm',
      'content': 'Vestibulum eget odio ut ligula gravida malesuada.'
    }
  ]

  constructor(
    private modalService: ModalService,
  ) {}

  async ngOnInit() {
    const models = await DataStore.query(Post);
    console.log(models);
  }

  public goFullScreen(feed: any): void {
    const dialog = this.modalService.open(FullScreenFeedComponent, { fullscreen: true });
    dialog.componentInstance.feed = feed;
    dialog.result.then(
      () => {},
      () => {},
    );
  }
  
  ngOnDestroy() {}
}

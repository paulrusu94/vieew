import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FullScreenFeedComponent } from './components/fullscreen-feed/fullscreen-feed.component';

// Amplify
import { Client, generateClient } from 'aws-amplify/data';
import { type Schema } from 'src/../amplify/data/resource';

const client = generateClient<Schema>();
type Post = Schema['Post']['type'];


@Component({
  selector: '[appFeeds]',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit, OnDestroy {

  public feeds: Array<Post> = [];
  // private subscription: any;
  constructor(
    private modalService: ModalService
  ) { }

  private async fetchPosts() {
    const {data} = await client.models.Post.postsByDate({type: "Post"}, {sortDirection: "DESC", limit: 5});
    this.feeds = [...data as Post[]];
  }

  async ngOnInit() {
    
    this.fetchPosts()
  }

  public goFullScreen(feed: any): void {
    const dialog = this.modalService.open(FullScreenFeedComponent, { fullscreen: true });
    dialog.componentInstance.feed = feed;
    dialog.result.then(
      () => { },
      () => { },
    );
  }

  ngOnDestroy() {
  //   this.subscription.unsubscribe()
   }
}

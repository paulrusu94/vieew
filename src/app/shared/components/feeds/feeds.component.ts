import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FullScreenFeedComponent } from './components/fullscreen-feed/fullscreen-feed.component';

// Amplify
import { Client, generateClient } from 'aws-amplify/data';
import { type Schema } from 'src/../amplify/data/resource';
import { getUrl } from 'aws-amplify/storage';

const client = generateClient<Schema>();
type Post = Schema['Post']['type'];


@Component({
  selector: '[appFeeds]',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit, OnDestroy {

  public feeds: Array<any> = [];
  // private subscription: any;
  constructor(
    private modalService: ModalService
  ) { }

  private async fetchPosts() {
    const { data } = await client.models.Post.postsByDate({ type: "Post" }, { sortDirection: "DESC", limit: 10 });
    this.feeds = await Promise.all([...data as Post[]].map(
      async (feed) => ({
        ...feed,
        createdAt: new Date(feed.createdAt!).toLocaleDateString(),
        author: await feed.author(),
        medias: await Promise.all((await feed.medias()).data.map(
          async media => ({
            ...media,
            url: await getUrl({ path: media.path!, options: { contentDisposition: 'inline'} })
          }))
        )
      })
    ));
    console.log("adaasdads", this.feeds)
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

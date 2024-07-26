import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FullScreenFeedComponent } from './components/fullscreen-feed/fullscreen-feed.component';

// Amplify
import { generateClient } from 'aws-amplify/data';
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

  // private async fetchPosts(client: Client) {
  //   const {data} = await client.graphql({query: listPosts, variables: { limit: 100 }})
  //   const {nextToken, items} = data.listPosts;
  //   this.feeds.push(...items as Post[])
  //   this.feeds.sort((postA, postB) => {
  //     return new Date(postA.createdAt!).getTime() < new Date(postB.createdAt!).getTime() ? 1 : -1
  //   })
  // }

  async ngOnInit() {
    
    try {
      const { data, errors } = await client.models.Post.list();
      console.log(data)
      this.feeds = data
    } catch (err) {
      console.log(err);
    }
  //   this.subscription = client
  //     .graphql({ query: onCreatePost })
  //     .subscribe(({ next: ({ data }) => {
  //       this.fetchPosts(client)
  //     }}))

  //   this.subscription = client
  //     .graphql({ query: onCreatePost })
  //     .subscribe(({ next: ({ data }) => {
  //       this.fetchPosts(client)
  //     }}))
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

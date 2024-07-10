import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FullScreenFeedComponent } from './components/fullscreen-feed/fullscreen-feed.component';
// Amplify
import { Client, generateClient } from 'aws-amplify/api';
// import { listPosts } from 'src/graphql/queries';
// import { onCreatePost } from 'src/graphql/subscriptions';

interface Post {
  id?: string,
  brand: any // Brand
  authorId: string;
  content: string;
  title?: string;
  createdAt?: string
}
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

  // private async fetchPosts(client: Client) {
  //   const {data} = await client.graphql({query: listPosts, variables: { limit: 100 }})
  //   const {nextToken, items} = data.listPosts;
  //   this.feeds.push(...items as Post[])
  //   this.feeds.sort((postA, postB) => {
  //     return new Date(postA.createdAt!).getTime() < new Date(postB.createdAt!).getTime() ? 1 : -1
  //   })
  // }

  async ngOnInit() {
  //   const client = generateClient()
  //   this.fetchPosts(client)
    
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

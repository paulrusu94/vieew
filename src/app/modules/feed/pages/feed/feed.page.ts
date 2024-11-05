import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/shared/api/posts.service';
import { UserStore } from 'src/app/shared/store/user.store';

@Component({
  selector: '[appFeed]',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit, OnDestroy {
  public currentUser: any = null;
  public posts$!: Observable<any[]>;
  
  constructor(
    private postsService: PostsService,
    public userStore: UserStore
  ) {
    this.refreshPosts();
  }

  ngOnInit() {
    this.currentUser = this.userStore.getCurrentUser();
  }
  
  // Refresh the posts observable
  public refreshPosts(): void {
    this.posts$ = this.postsService.fetchPosts();
  }
  
  ngOnDestroy() {}
}

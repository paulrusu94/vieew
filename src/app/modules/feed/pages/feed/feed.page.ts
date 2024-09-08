import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schema } from 'amplify/data/resource';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/shared/api/posts.service';

const client = generateClient<Schema>();
type Post = Schema['Post']['type'];

@Component({
  selector: '[appFeed]',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit, OnDestroy {
  public posts$!: Observable<any[]>;
  
  private errorHandled = false;
  public email = '';
  public isAuthenticated: boolean = false;

  constructor(
    private router: Router,
    private postsService: PostsService
  ) {
    this.refreshPosts();
  }

  async ngOnInit() {
    const currentUser = await getCurrentUser();
    const userAttributes = await fetchUserAttributes();
    console.log(currentUser)
    console.log(userAttributes)
    this.email = userAttributes.email!
  }
  
  // Refresh the posts observable
  public refreshPosts(): void {
    this.posts$ = this.postsService.fetchPosts();
  }
  
  ngOnDestroy() {}
}

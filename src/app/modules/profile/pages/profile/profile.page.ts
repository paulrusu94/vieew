import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/shared/api/posts.service';
import { UserStore } from 'src/app/shared/store/user.store';

@Component({
  selector: '[appProfile]',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  
  public currentUser: any = null;
  public posts$!: Observable<any[]>;
  public profile: any;
  public isAuthenticated: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private userStore: UserStore
  ) {
    this.profile = this.route.snapshot.data['profile'].data[0];
    this.currentUser = this.userStore.getCurrentUser();
    this.refreshPosts();
  }

  get visitingOwnProfile() {
    return this.currentUser && this.currentUser.userId === this.profile.userId;
  }

  ngOnInit() {}

  // Refresh the posts observable
  public refreshPosts(): void {
    this.posts$ = this.postsService.fetchPosts(this.profile?.userId);
  }
  
  ngOnDestroy() {}
}

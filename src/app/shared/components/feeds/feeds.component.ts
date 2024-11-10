import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FullScreenFeedComponent } from './components/fullscreen-feed/fullscreen-feed.component';
import { PostsService } from '../../api/posts.service';

@Component({
  selector: '[appFeeds]',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit, OnDestroy {
  @Input() posts: any;
  @Output() onPostDeleted = new EventEmitter();

  constructor(
    private modalService: ModalService,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    console.log(this.posts);
  }

  public goFullScreen(post: any): void {
    const dialog = this.modalService.open(FullScreenFeedComponent, { fullscreen: true });
    dialog.componentInstance.post = post;
    dialog.result.then(
      () => { },
      () => { },
    );
  }

  deletePost(postId: any) {
    this.postsService.deletePost(postId).subscribe({
      next: (response) => {
        console.log(response);
        this.onPostDeleted.emit();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy() {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeedRoutingModule } from './feed-routing.module';
// Pages
import { FeedPage } from './pages/feed/feed.page';
// Components
import { AddPostComponent } from './pages/feed/components/add-post/add-post.component';
import { FeedsComponent } from './pages/feed/components/feeds/feeds.component';
// Modals
import { FullScreenFeedComponent } from './pages/feed/components/feeds/components/fullscreen-feed/fullscreen-feed.component';

@NgModule({
  imports: [CommonModule, FeedRoutingModule, SharedModule],
  declarations: [
    // Pages
    FeedPage,
    // Components
    AddPostComponent,
    FeedsComponent,
    // Modals
    FullScreenFeedComponent
  ],
  providers: [],
})
export class FeedModule {}

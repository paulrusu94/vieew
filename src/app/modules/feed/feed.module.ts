import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeedRoutingModule } from './feed-routing.module';
// Pages
import { FeedPage } from './pages/feed/feed.page';
// Components
import { AddPostComponent } from './pages/feed/components/add-post/add-post.component';

@NgModule({
  imports: [CommonModule, FeedRoutingModule, SharedModule],
  declarations: [
    // Pages
    FeedPage,
    // Components
    AddPostComponent,
  ],
  providers: [],
})
export class FeedModule {}

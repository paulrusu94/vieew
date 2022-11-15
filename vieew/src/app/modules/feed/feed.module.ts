import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPage } from './pages/feed/feed.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeedRoutingModule } from './feed-routing.module';
import { StoriesComponent } from './pages/feed/components/stories/stories.component';

@NgModule({
  declarations: [
    // Pages
    FeedPage,
    // Components
    StoriesComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule
  ]
})
export class FeedModule { }

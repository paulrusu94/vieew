import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
// Pages
import { ProfilePage } from './pages/profile/profile.page';
// Components
import { AddPostComponent } from './pages/profile/components/add-post/add-post.component';
import { FeedsComponent } from './pages/profile/components/feeds/feeds.component';
// Modals
import { FullScreenFeedComponent } from './pages/profile/components/feeds/components/fullscreen-feed/fullscreen-feed.component';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
  declarations: [
    // Pages
    ProfilePage,
    // Components
    AddPostComponent,
    FeedsComponent,
    // Modals
    FullScreenFeedComponent
  ],
  providers: [],
})
export class ProfileModule {}

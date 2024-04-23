import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
// Pages
import { ProfilePage } from './pages/profile/profile.page';
// Components
import { AddPostComponent } from './pages/profile/components/add-post/add-post.component';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
  declarations: [
    // Pages
    ProfilePage,
    // Components
    AddPostComponent,
  ],
  providers: [],
})
export class ProfileModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { IndustriesSearchComponent } from './components/industries-search/industries-search.component';
import { FeedsComponent } from './components/feeds/feeds.component';
// Modals
import { LoginDialogComponent } from './modals/login/login-dialog.component';
import { RegisterDialogComponent } from './modals/register/register-dialog.component';
import { ConfirmDialogComponent } from './modals/confirm/confirm-dialog.component';

import { FullScreenFeedComponent } from './components/feeds/components/fullscreen-feed/fullscreen-feed.component';
import { ForgotPasswordDialogComponent } from './modals/forgot-password/forgot-password-dialog.component';
// Services
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from './api/users.service';
import { PostsService } from './api/posts.service';
import { MediaService } from './api/media.service';
import { UpgradeAccountDialogComponent } from './modals/upgrade-account/upgrade-account-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // Shared components
    IndustriesSearchComponent,
    FeedsComponent,
    // Modals
    FullScreenFeedComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    ConfirmDialogComponent,
    ForgotPasswordDialogComponent,
    UpgradeAccountDialogComponent
  ],
  exports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    // Shared components
    IndustriesSearchComponent,
    FeedsComponent,
    ],
  providers: [
    AuthenticationService,
    UsersService,
    PostsService,
    MediaService
  ],
})
export class SharedModule {}

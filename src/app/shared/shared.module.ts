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
    ConfirmDialogComponent
  ],
  exports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    // Shared components
    IndustriesSearchComponent,
    FeedsComponent,
    ],
  providers: [],
})
export class SharedModule {}

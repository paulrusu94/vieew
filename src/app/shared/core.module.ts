import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// HttpInterceptors
import { HttpInterceptors } from './api/http-interceptors';
// API
import { ApiService } from './services/api.service';

// Common Services
import { AuthorizationService } from './services/authorization.service';
import { LocalStorageService } from './services/local-storage.service';
import { ModalService } from './services/modal.service';
import { SessionService } from './services/session.service';
import { NotificationService } from './services/notification.service';
// Router Guards
import { AuthorizedOnlyGuard } from './guards/authorized-only.guard';
import { CanLoadGuard } from './guards/can-load.guard';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    // API
    ApiService,
    // Common Services
    AuthorizationService,
    LocalStorageService,
    ModalService,
    SessionService,
    NotificationService,
    // Router Guards
    AuthorizedOnlyGuard,
    CanLoadGuard,
    // Http Interceptors
    HttpInterceptors,
  ],
})
export class CoreModule {}

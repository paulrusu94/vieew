import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// HttpInterceptors
// API



// Router Guards
import { AuthorizedOnlyGuard } from './guards/authorized-only.guard';
import { CanLoadGuard } from './guards/can-load.guard';
import { ModalService } from './services/modal.service';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    // // API
    ApiService,
    // // Common Services
    // AuthorizationService,
    // LocalStorageService,
    ModalService,
    // SessionService,
    // NotificationService,
    // Router Guards
    AuthorizedOnlyGuard,
    CanLoadGuard,
    // Http Interceptors
  ],
})
export class CoreModule {}

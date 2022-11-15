import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ModalService } from './services/modal.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    // API
    ApiService,

    // Common Services
    ModalService,
  ],
})
export class CoreModule {}

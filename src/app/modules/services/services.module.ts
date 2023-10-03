import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesRoutingModule } from './services-routing.module';
// Pages
import { ServicesPage } from './pages/services/services.page';
import { AddEditServicesPage } from './pages/add-edit-service/add-edit-service.page';
import { ServicePage } from './pages/service/service.page';

@NgModule({
  imports: [CommonModule, ServicesRoutingModule, SharedModule],
  declarations: [
    ServicesPage,
    AddEditServicesPage,
    ServicePage
  ],
  providers: [],
  entryComponents: [],
})
export class ServicesModule {}

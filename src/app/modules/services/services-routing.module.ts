import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { ServicesPage } from './pages/services/services.page';
import { AddEditServicesPage } from './pages/add-edit-service/add-edit-service.page';
import { ServicePage } from './pages/service/service.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesPage,
  },
  {
    path: 'new',
    component: AddEditServicesPage,
  },
  {
    path: ':id',
    component: ServicePage,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}

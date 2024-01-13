import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
// Pages
import { DashboardPage } from './pages/dashboard/dashboard.page';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  declarations: [
    DashboardPage
  ],
  providers: [],
})
export class DashboardModule {}

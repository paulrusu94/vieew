import { Routes } from '@angular/router';
import { AuthorizedOnlyGuard } from './shared/guards/authorized-only.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';
// Components
import { PublicLayoutComponent } from './base/components/public-layout/public-layout.component';
import { LoginComponent } from './base/components/login/login.component';
import { RegisterComponent } from './base/components/register/register.component';
import { SecuredLayoutComponent } from './base/components/secured-layout/secured-layout.component';
import { PasswordResetComponent } from './base/components/password-reset/password-reset.component';

export const routes: Routes = [
  {
    path: '',
    component: SecuredLayoutComponent,
    canActivate: [AuthorizedOnlyGuard],
    canActivateChild: [AuthorizedOnlyGuard],
    children: [
      {
        path: 'dashboard',
        canLoad: [CanLoadGuard],
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'services',
        canLoad: [CanLoadGuard],
        loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule),
      },
    ],
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'password-reset',
        component: PasswordResetComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

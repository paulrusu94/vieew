import { Routes } from '@angular/router';
import { AuthorizedOnlyGuard } from './shared/guards/authorized-only.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';
// Components
import { LoginComponent } from './base/components/login/login.component';
import { ConfirmComponent } from './base/components/confirm/confirm.component';
import { RegisterComponent } from './base/components/register/register.component';
import { SecuredLayoutComponent } from './base/components/secured-layout/secured-layout.component';
import { PasswordResetComponent } from './base/components/password-reset/password-reset.component';

export const routes: Routes = [
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
  {
    path: 'confirmation',
    component: ConfirmComponent,
  },
  {
    path: '',
    component: SecuredLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/feed/feed.module').then(m => m.FeedModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule),
      },
      {
        path: 'services',
        canLoad: [CanLoadGuard],
        loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule),
        canActivate: [AuthorizedOnlyGuard],
        canActivateChild: [AuthorizedOnlyGuard],
      },
      {
        path: ':profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

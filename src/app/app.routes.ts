import { Routes } from '@angular/router';
import { AuthorizedOnlyGuard } from './shared/guards/authorized-only.guard';
// Componennts
import { WelcomeComponent } from './base/components/welcome/welcome.component';
import { LoginComponent } from './base/components/login/login.component';
import { RegisterComponent } from './base/components/register/register.component';
import { SecuredLayoutComponent } from './base/components/secured-layout/secured-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: SecuredLayoutComponent,
    canActivate: [AuthorizedOnlyGuard],
    canActivateChild: [AuthorizedOnlyGuard],
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: '/welcome',
  },
];

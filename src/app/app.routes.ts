import { Routes } from '@angular/router';
import { AuthorizedOnlyGuard } from './shared/guards/authorized-only.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';
// Components
import { SecuredLayoutComponent } from './base/components/secured-layout/secured-layout.component';

export const routes: Routes = [
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

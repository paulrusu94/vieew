import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { AuthorizedOnlyGuard } from './shared/guards/authorized-only.guard'
import { LoginComponent } from './shared/components/login/login.component'
import { RegisterComponent } from './shared/components/register/register.component'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('~/app/modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthorizedOnlyGuard]
  },
  {
    path: 'browse',
    loadChildren: () => import('~/app/modules/browse/browse.module').then((m) => m.BrowseModule),
    canActivate: [AuthorizedOnlyGuard]
  },
  {
    path: 'search',
    loadChildren: () => import('~/app/modules/search/search.module').then((m) => m.SearchModule),
    canActivate: [AuthorizedOnlyGuard]
  },
  {
    path: 'featured',
    loadChildren: () => import('~/app/modules/featured/featured.module').then((m) => m.FeaturedModule),
    canActivate: [AuthorizedOnlyGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/modules/settings/settings.module').then((m) => m.SettingsModule),
    canActivate: [AuthorizedOnlyGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}

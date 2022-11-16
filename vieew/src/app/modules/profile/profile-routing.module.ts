import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components

// Pages
import { ProfilePage } from './pages/profile/profile.page';

const routes: Routes = [
  {
    path: ':id',
    component: ProfilePage,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { ProfilePage } from './pages/profile/profile.page';
// Resolvers
import { ProfileResolver } from 'src/app/shared/resolvers/profile.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    resolve: { profile: ProfileResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

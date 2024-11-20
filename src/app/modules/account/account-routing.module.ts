import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { WalletPage } from './pages/wallet/wallet.page';
// Resolvers

const routes: Routes = [
  {
    path: 'wallet',
    component: WalletPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}

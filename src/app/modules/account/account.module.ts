import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
// Pages
import { WalletPage } from './pages/wallet/wallet.page';
// Components

@NgModule({
  imports: [CommonModule, AccountRoutingModule, SharedModule],
  declarations: [
    // Pages
    WalletPage,
    // Components
  ],
  providers: [],
})
export class AccountModule {}

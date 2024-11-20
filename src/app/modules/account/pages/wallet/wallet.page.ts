import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserStore } from 'src/app/shared/store/user.store';

@Component({
  selector: '[appWallet]',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit, OnDestroy {
  
  public currentUser: any = null;

  constructor(
    private userStore: UserStore
  ) {
    this.currentUser = this.userStore.getCurrentUser();
  }

  ngOnInit() {}
  
  ngOnDestroy() {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
// Guards
import { AuthorizedOnlyGuard } from './guards/authorized-only.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NativeScriptUISideDrawerModule
  ],
  declarations: [],
  entryComponents: [],
  exports: [
    NativeScriptUISideDrawerModule
  ],
  providers: [
    AuthorizedOnlyGuard,
  ],
})
export class SharedModule {}

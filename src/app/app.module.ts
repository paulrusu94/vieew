import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './base/app.component';
import { TopNavigationComponent } from './base/layout/components/top-navigation/top-navigation.component';
import { SecuredLayoutComponent } from './base/layout/layout.component';
import { SideNavigationComponent } from './base/layout/components/side-navigation/side-navigation.component';
// Amplify
import { Amplify } from 'aws-amplify';
import outputs from "./../../amplify_outputs.json"


Amplify.configure(outputs);

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SecuredLayoutComponent,
    // Secured layout components
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AmplifyAuthenticatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

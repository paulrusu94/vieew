import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './base/app.component';
import { PublicLayoutComponent } from './base/components/public-layout/public-layout.component';
import { TopNavigationComponent } from './base/components/public-layout/components/top-navigation/top-navigation.component';
import { LoginComponent } from './base/components/login/login.component';
import { RegisterComponent } from './base/components/register/register.component';
import { SecuredLayoutComponent } from './base/components/secured-layout/secured-layout.component';
import { SideNavigationComponent } from './base/components/secured-layout/components/side-navigation/side-navigation.component';
// Amplify
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    TopNavigationComponent,
    LoginComponent,
    RegisterComponent,
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

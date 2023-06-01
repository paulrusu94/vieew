import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './base/app.component';
import { WelcomeComponent } from './base/components/welcome/welcome.component';
import { LoginComponent } from './base/components/login/login.component';
import { RegisterComponent } from './base/components/register/register.component';
import { SecuredLayoutComponent } from './base/components/secured-layout/secured-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    SecuredLayoutComponent
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

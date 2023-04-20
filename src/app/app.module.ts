import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
// Modules
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './shared/core.module'
import { AppRoutingModule } from './app-routing.module'
// Components
import { AppComponent } from './app.component'
import { LoginComponent } from './shared/components/login/login.component'
import { RegisterComponent } from './shared/components/register/register.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

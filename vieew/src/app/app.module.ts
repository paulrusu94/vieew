import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
// Shared Modules
import { CoreModule } from './shared/core.module';
import { MediaPlayerDialogComponent } from './shared/modals/media-player/media-player-dialog.component';
import { SearchDialogComponent } from './shared/modals/search/search-dialog.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    BottomNavigationComponent,
    // Modals
    SearchDialogComponent,
    MediaPlayerDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

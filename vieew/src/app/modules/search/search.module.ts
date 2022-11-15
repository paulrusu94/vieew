import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPage } from './pages/search/search.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { StoriesComponent } from './pages/search/components/stories/stories.component';

@NgModule({
  declarations: [
    // Pages
    SearchPage,
    // Components
    StoriesComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }

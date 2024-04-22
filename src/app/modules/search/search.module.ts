import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
// Pages
import { SearchPage } from './pages/search/search.page';

@NgModule({
  imports: [CommonModule, SearchRoutingModule, SharedModule],
  declarations: [
    // Pages
    SearchPage,
  ],
  providers: [],
})
export class SearchModule {}

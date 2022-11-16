import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPage } from './pages/search/search.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    // Pages
    SearchPage,
    // Components
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }

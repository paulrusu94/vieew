import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Shared Components
import { IndustriesSearchComponent } from './components/industries-search/industries-search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // Shared components
    IndustriesSearchComponent,
  ],
  exports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    // Shared components
    IndustriesSearchComponent
    ],
  providers: [],
})
export class SharedModule {}

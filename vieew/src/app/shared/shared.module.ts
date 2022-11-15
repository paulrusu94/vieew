import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchDialogComponent } from './modals/search/search-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  exports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}

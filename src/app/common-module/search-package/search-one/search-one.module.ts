import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOneComponent } from './search-one.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [SearchOneComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule


  ],
  exports: [
    SearchOneComponent
  ]
})
export class SearchOneModule { }

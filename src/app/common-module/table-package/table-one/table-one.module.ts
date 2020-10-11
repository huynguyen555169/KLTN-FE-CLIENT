import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOneComponent } from './table-one.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [TableOneComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule
  ],
  exports: [
    TableOneComponent
  ]
})
export class TableOneModule { }

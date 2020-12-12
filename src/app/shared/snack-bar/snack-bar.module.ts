import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar.component';



@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SnackBarComponent
  ]
})
export class SnackBarModule { }

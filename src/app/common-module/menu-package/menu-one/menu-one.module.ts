import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOneComponent } from './menu-one.component';



@NgModule({
  declarations: [MenuOneComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuOneComponent]
})
export class MenuOneModule { }

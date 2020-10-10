import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from './menu-admin.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [MenuAdminComponent],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [
    MenuAdminComponent
  ]
})
export class MenuAdminModule { }

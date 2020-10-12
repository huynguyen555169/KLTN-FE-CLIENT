import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MatMenuModule } from '@angular/material/menu';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuAdminModule } from 'src/app/common-module/menu-package/menu-admin/menu-admin.module';
import { TableOneModule } from 'src/app/common-module/table-package/table-one/table-one.module';
import { MenuTwoModule } from 'src/app/common-module/menu-package/menu-two/menu-two.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuThreeModule } from 'src/app/common-module/menu-package/menu-three/menu-three.module';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    AdminRoutingModule,
    MenuAdminModule,
    TableOneModule,
    MenuTwoModule,
    MatDialogModule,
    MenuThreeModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }

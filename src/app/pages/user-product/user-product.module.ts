import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProductComponent } from './user-product.component';
import { UserProductRoutingModule } from './user-product-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CardOrderModule } from 'src/app/common-module/card-package/card-order/card-order.module';



@NgModule({
  declarations: [UserProductComponent],
  imports: [
    CommonModule,
    UserProductRoutingModule,
    MatTabsModule,
    CardOrderModule
  ],
  exports: [
    UserProductComponent
  ]
})
export class UserProductModule { }

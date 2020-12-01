import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CardCartModule } from 'src/app/common-module/card-package/card-cart/card-cart.module';
import { CartRoutingModule } from './cart-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CardCartModule,
    CartRoutingModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class CartModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteComponent } from './complete.component';
import { CompleteRoutingModule } from './complete-routing.module';
import { CardOrderModule } from 'src/app/common-module/card-package/card-order/card-order.module';



@NgModule({
  declarations: [CompleteComponent],
  imports: [
    CommonModule,
    CompleteRoutingModule,
    CardOrderModule
  ],
  exports: [
    CompleteComponent
  ]
})
export class CompleteModule { }

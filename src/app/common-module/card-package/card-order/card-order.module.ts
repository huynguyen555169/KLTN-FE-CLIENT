import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOrderComponent } from './card-order.component';



@NgModule({
  declarations: [CardOrderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardOrderComponent
  ]
})
export class CardOrderModule { }

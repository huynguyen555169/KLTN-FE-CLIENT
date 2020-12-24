import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOrderComponent } from './card-order.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CardOrderComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CardOrderComponent
  ]
})
export class CardOrderModule { }

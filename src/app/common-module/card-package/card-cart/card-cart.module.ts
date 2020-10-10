import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCartComponent } from './card-cart.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CardCartComponent],
  imports: [
    CommonModule, FormsModule, MatCheckboxModule, MatButtonModule

  ],
  exports: [
    CardCartComponent
  ]
})
export class CardCartModule { }

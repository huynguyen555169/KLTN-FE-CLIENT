import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCartComponent } from './card-cart.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CardCartComponent],
  imports: [
    CommonModule, FormsModule, MatCheckboxModule, MatButtonModule, MatIconModule

  ],
  exports: [
    CardCartComponent
  ]
})
export class CardCartModule { }

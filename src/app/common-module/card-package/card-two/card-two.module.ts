import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTwoComponent } from './card-two.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardTwoComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [CardTwoComponent]
})
export class CardTwoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLabelComponent } from './card-label.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardLabelComponent],
  imports: [CommonModule, MatIconModule],
  exports: [CardLabelComponent]
})
export class CardLabelModule {}

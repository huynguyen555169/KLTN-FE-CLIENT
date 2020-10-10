import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSixComponent } from './card-six.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [CardSixComponent],
  imports: [CommonModule, MatIconModule, MatChipsModule],
  exports: [CardSixComponent]
})
export class CardSixModule {}

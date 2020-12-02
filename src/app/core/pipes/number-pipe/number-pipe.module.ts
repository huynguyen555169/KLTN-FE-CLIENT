import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountNumberPipe } from './count-number/count-number.pipe';
import { MoneyFormatPipe } from './money-format/money-format.pipe';

@NgModule({
  declarations: [CountNumberPipe, MoneyFormatPipe],
  imports: [CommonModule],
  exports: [CountNumberPipe, MoneyFormatPipe]
})
export class NumberPipeModule {}

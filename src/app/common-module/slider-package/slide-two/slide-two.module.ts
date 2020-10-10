import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideTwoComponent } from './slide-two.component';
import { SlideTwoItemModule } from './components/slide-two-item/slide-two-item.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SlideTwoComponent],
  imports: [CommonModule, SlideTwoItemModule, MatIconModule],
  exports: [SlideTwoComponent]
})
export class SlideTwoModule {}

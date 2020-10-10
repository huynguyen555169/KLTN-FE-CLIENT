import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideThreeItemComponent } from './slide-three-item.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SlideThreeItemComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SlideThreeItemComponent]
})
export class SlideThreeItemModule {}

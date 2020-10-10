import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideThreeComponent } from './slide-three.component';
import { SlideThreeItemModule } from './components/slide-three-item/slide-three-item.module';

@NgModule({
  declarations: [SlideThreeComponent],
  imports: [CommonModule, SlideThreeItemModule],
  exports: [SlideThreeComponent]
})
export class SlideThreeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideOneComponent } from './slide-one.component';
import { SlideOneItemModule } from './components/slide-one-item/slide-one-item.module';

@NgModule({
  declarations: [SlideOneComponent],
  imports: [CommonModule, SlideOneItemModule],
  exports: [SlideOneComponent]
})
export class SlideOneModule {}

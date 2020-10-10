import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangOneComponent } from './lang-one.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LangOneComponent],
  imports: [CommonModule, MatIconModule],
  exports: [LangOneComponent]
})
export class LangOneModule {}

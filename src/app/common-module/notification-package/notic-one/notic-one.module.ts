import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticOneComponent } from './notic-one.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [NoticOneComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule
  ],
  exports: [NoticOneComponent]
})
export class NoticOneModule {}

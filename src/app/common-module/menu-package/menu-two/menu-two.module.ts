import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTwoComponent } from './menu-two.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [MenuTwoComponent],
  imports: [CommonModule, MatIconModule, MatMenuModule],
  exports: [MenuTwoComponent],
})
export class MenuTwoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuThreeComponent } from './menu-three.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MenuThreeNavItemComponent } from './components/menu-three-nav-item/menu-three-nav-item.component';

@NgModule({
  declarations: [MenuThreeComponent, MenuThreeNavItemComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatExpansionModule],
  exports: [MenuThreeComponent]
})
export class MenuThreeModule {}

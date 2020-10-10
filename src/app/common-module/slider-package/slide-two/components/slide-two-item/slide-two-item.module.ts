import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatIconModule } from "@angular/material/icon";
import { SlideTwoItemComponent } from "./slide-two-item.component";

@NgModule({
  declarations: [SlideTwoItemComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SlideTwoItemComponent],
})
export class SlideTwoItemModule {}

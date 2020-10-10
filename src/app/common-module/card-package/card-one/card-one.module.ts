import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardOneComponent } from "./card-one.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [CardOneComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [CardOneComponent],
})
export class CardOneModule {}

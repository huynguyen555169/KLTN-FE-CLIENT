import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterOneComponent } from "./footer-one.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [FooterOneComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [FooterOneComponent],
})
export class FooterOneModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlideFourComponent } from "./slide-four.component";
import { CardOneModule } from "../../card-package/card-one/card-one.module";

@NgModule({
  declarations: [SlideFourComponent],
  imports: [CommonModule, CardOneModule],
  exports: [SlideFourComponent],
})
export class SlideFourModule {}

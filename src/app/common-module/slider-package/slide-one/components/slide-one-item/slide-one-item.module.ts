import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlideOneItemComponent } from "./slide-one-item.component";
import { MatIconModule } from "@angular/material/icon";
import { NumberPipeModule } from "src/app/core/interceptors/pipes/number-pipe/number-pipe.module";
import { StringPipeModule } from "src/app/core/interceptors/pipes/string-pipe/string-pipe.module";

@NgModule({
  declarations: [SlideOneItemComponent],
  imports: [CommonModule, MatIconModule, NumberPipeModule, StringPipeModule],
  exports: [SlideOneItemComponent],
})
export class SlideOneItemModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LabelOneComponent } from "./label-one.component";
import { NumberPipeModule } from 'src/app/core/services/pipes/number-pipe/number-pipe.module';

@NgModule({
  declarations: [LabelOneComponent],
  imports: [CommonModule, NumberPipeModule],
  exports: [LabelOneComponent],
})
export class LabelOneModule { }

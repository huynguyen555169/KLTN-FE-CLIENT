import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillterOneComponent } from './fillter-one.component';
import { Ng5SliderModule } from 'ng5-slider';
import { NumberPipeModule } from 'src/app/core/interceptors/pipes/number-pipe/number-pipe.module';
import { StringPipeModule } from 'src/app/core/interceptors/pipes/string-pipe/string-pipe.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [FillterOneComponent],
  imports: [
    CommonModule,
    Ng5SliderModule,
    NumberPipeModule,
    StringPipeModule,
    MatButtonModule

  ],
  exports: [
    FillterOneComponent
  ]
})
export class FillterOneModule { }

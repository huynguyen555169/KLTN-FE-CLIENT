import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMaxMinTwoComponent } from './search-max-min-two.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NumberPipeModule } from 'src/app/core/services/pipes/number-pipe/number-pipe.module';
import { StringPipeModule } from 'src/app/core/services/pipes/string-pipe/string-pipe.module';

@NgModule({
  declarations: [SearchMaxMinTwoComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    NumberPipeModule,
    StringPipeModule,
    MatInputModule,
    FormsModule,
    NgxSliderModule,
  ],
  exports: [SearchMaxMinTwoComponent],
})
export class SearchMaxMinTwoModule { }

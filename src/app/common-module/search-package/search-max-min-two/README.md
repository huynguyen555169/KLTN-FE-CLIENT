# Search Min Max

## Selector:

app-search-max-min-two

### Input:

data = {
minValue:number;
maxValue:number;
}

### Output:

newRangeValue: {
min:number;
max:number;
}

### Module:

import { MatButtonModule } from '@angular/material/button';
import { NumberPipeModule } from 'src/app/core/pipes/number-pipe/number-pipe.module';
import { StringPipeModule } from 'src/app/core/pipes/string-pipe/string-pipe.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgModule } from '@angular/core';

### Note:

install ngx-slider:

npm install --save @angular-slider/ngx-slider

# Example:

     <app-search-max-min-two
        [data]="dataValue"
        (newRangeValue)="handleRangeValue($event)"
      ></app-search-max-min-two>

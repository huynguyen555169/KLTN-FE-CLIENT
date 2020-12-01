import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch.component';
import { WatchRoutingModule } from './watch-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { CardOneModule } from 'src/app/common-module/card-package/card-one/card-one.module';
import { SearchMaxMinTwoModule } from 'src/app/common-module/search-package/search-max-min-two/search-max-min-two.module';



@NgModule({
  declarations: [WatchComponent],
  imports: [
    CommonModule,
    WatchRoutingModule,
    CardOneModule, SearchMaxMinTwoModule, MatSelectModule
  ]
})
export class WatchModule { }

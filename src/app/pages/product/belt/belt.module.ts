import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeltComponent } from './belt.component';
import { BeltRoutingModule } from './belt-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { CardOneModule } from 'src/app/common-module/card-package/card-one/card-one.module';
import { SearchMaxMinTwoModule } from 'src/app/common-module/search-package/search-max-min-two/search-max-min-two.module';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';



@NgModule({
  declarations: [BeltComponent],
  imports: [
    CommonModule,
    BeltRoutingModule,
    CardOneModule, SearchMaxMinTwoModule, MatSelectModule, PaginationModule

  ]
})
export class BeltModule { }

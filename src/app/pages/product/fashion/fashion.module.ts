import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { FashionRoutingModule } from './fashion-routing.module';
import { SearchMaxMinTwoModule } from 'src/app/common-module/search-package/search-max-min-two/search-max-min-two.module';
import { CardOneModule } from 'src/app/common-module/card-package/card-one/card-one.module';
import { MatSelectModule } from '@angular/material/select';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';




@NgModule({
  declarations: [FashionComponent],
  imports: [
    CommonModule, FashionRoutingModule, CardOneModule, SearchMaxMinTwoModule, MatSelectModule,
    PaginationModule
  ],
  exports: [
    FashionComponent
  ]
})
export class FashionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesComponent } from './shoes.component';
import { ShoesRoutingModule } from './shoes-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { CardOneModule } from 'src/app/common-module/card-package/card-one/card-one.module';
import { SearchMaxMinTwoModule } from 'src/app/common-module/search-package/search-max-min-two/search-max-min-two.module';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';



@NgModule({
  declarations: [ShoesComponent],
  imports: [
    CommonModule,
    ShoesRoutingModule,
    CardOneModule, SearchMaxMinTwoModule, MatSelectModule, PaginationModule
  ],
  exports: [
    ShoesComponent
  ]
})
export class ShoesModule { }

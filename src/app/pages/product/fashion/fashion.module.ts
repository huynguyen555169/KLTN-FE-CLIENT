import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { FillterOneModule } from 'src/app/common-module/fillter-package/fillter-one/fillter-one.module';
import { FashionRoutingModule } from './fashion-routing.module';
import { CardProductModule } from 'src/app/common-module/card-package/card-product/card-product.module';




@NgModule({
  declarations: [FashionComponent],
  imports: [
    CommonModule, FillterOneModule, FashionRoutingModule, CardProductModule
  ],
  exports: [
    FashionComponent
  ]
})
export class FashionModule { }

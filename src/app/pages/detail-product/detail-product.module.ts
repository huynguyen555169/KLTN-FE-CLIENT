import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product.component';
import { DetailProductRoutingModule } from './detail-product-routing.module';
import { SlideFiveModule } from 'src/app/common-module/slider-package/slide-five/slide-five.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { SlideSixModule } from 'src/app/common-module/slider-package/slide-six/slide-six.module';



@NgModule({
  declarations: [DetailProductComponent, NumbersOnlyDirective],
  imports: [
    CommonModule,
    DetailProductRoutingModule,
    SlideFiveModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    SlideSixModule

  ],
  exports: [
    DetailProductComponent
  ]
})
export class DetailProductModule { }

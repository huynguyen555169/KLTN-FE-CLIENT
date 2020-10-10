import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SlideOneModule } from 'src/app/common-module/slider-package/slide-one/slide-one.module';
import { LabelOneModule } from 'src/app/common-module/label-package/label-one/label-one.module';
import { CardTwoModule } from 'src/app/common-module/card-package/card-two/card-two.module';
import { CardTenModule } from 'src/app/common-module/card-package/card-ten/card-ten.module';
import { SlideThreeModule } from 'src/app/common-module/slider-package/slide-three/slide-three.module';
import { SlideTwoModule } from 'src/app/common-module/slider-package/slide-two/slide-two.module';
import { SlideFourModule } from 'src/app/common-module/slider-package/slide-four/slide-four.module';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SlideOneModule,
    LabelOneModule,
    CardTwoModule,
    CardTenModule,
    SlideThreeModule,
    SlideTwoModule,
    SlideFourModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { IntroduceRoutingModule } from './introduce-routing.module';



@NgModule({
  declarations: [IntroductionComponent],
  imports: [
    CommonModule,
    IntroduceRoutingModule,

  ],
  exports: [
    IntroductionComponent
  ]
})
export class IntroductionModule { }

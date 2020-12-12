import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCommentComponent } from './card-comment.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CardCommentComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CardCommentComponent
  ]
})
export class CardCommentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailAccountComponent } from './detail-account.component';
import { DetailAccountRoutingModule } from './detail-account-routing.module';
import { CDiscussionAttachComponent } from './c-discussion-attach/c-discussion-attach.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [DetailAccountComponent, CDiscussionAttachComponent],
  imports: [
    CommonModule,
    DetailAccountRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule


  ],
  exports: [
    DetailAccountComponent
  ]
})
export class DetailAccountModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    PaymentComponent
  ]
})
export class PaymentModule { }

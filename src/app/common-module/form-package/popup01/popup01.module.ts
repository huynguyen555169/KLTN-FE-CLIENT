import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Popup01Component } from "./popup01.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormComponent } from "./form/form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { CheckValidatecheckValidateComponent } from './check-validatecheck-validate/check-validatecheck-validate.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [Popup01Component, FormComponent, SignupComponentComponent, CheckValidatecheckValidateComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
  ],
  exports: [Popup01Component],
})
export class Popup01Module { }

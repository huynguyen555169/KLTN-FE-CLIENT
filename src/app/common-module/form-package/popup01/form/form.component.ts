import { Inject } from '@angular/core';
import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CheckValidatecheckValidateComponent } from '../check-validatecheck-validate/check-validatecheck-validate.component';
import { SignupComponentComponent } from '../signup-component/signup-component.component';
import { CustomValidator } from "./../custom-validator";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})

export class FormComponent implements OnInit {
  rfContact: FormGroup;

  @Output() isLog = new EventEmitter<boolean>();
  constructor(private router: Router, public dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rfContact = new FormGroup({
      oldPass: new FormControl("", [
        CustomValidator.required,
        CustomValidator.maxLength(12),
        CustomValidator.numberOnly,
      ]),
      newPass: new FormControl("", [
        CustomValidator.required,
        CustomValidator.maxLength(36),
      ])
    });
  }
  get oldPass() {
    return this.rfContact.get("oldPass");
  }
  get newPass() {
    return this.rfContact.get("newPass");
  }


  handleClick() {
    if (this.rfContact.valid) {
      this.dialogRef.close(!this.data.checkIs);
      console.log(this.oldPass.value)

    } else {
      console.log('That bai');
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  handleSignup() {
    this.dialog.open(CheckValidatecheckValidateComponent);
    this.dialogRef.close();
  }
}

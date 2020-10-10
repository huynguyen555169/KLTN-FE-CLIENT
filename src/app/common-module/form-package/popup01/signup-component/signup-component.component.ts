import { Component, Inject, OnInit } from '@angular/core';


import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomValidator } from '../custom-validator';
import { FormComponent } from '../form/form.component';



@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.scss']
})
export class SignupComponentComponent implements OnInit {

  rfContact: FormGroup;

  constructor(private router: Router, public dialogRef: MatDialogRef<SignupComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {

    console.log(this.data.data);
    this.rfContact = new FormGroup({
      phoneNumber: new FormControl("", [
        CustomValidator.required,
        CustomValidator.maxLength(12),
        CustomValidator.numberOnly,
      ]),
      fullName: new FormControl("", [
        CustomValidator.required,
        CustomValidator.maxLength(36),
      ]),
      passWord: new FormControl("", [
        CustomValidator.required,
        CustomValidator.maxLength(36),
      ]),
      rePass: new FormControl("", [
        CustomValidator.required,
        CustomValidator.maxLength(36),
      ])
    });
  }
  get phoneNumber() {
    return this.rfContact.get("phoneNumber");
  }
  get fullName() {
    return this.rfContact.get("fullName");
  }
  get passWord() {
    return this.rfContact.get("passWord");
  }
  get rePass() {
    return this.rfContact.get("rePass");
  }


  handleClick() {
    if (this.rfContact.valid) {
      this.dialogRef.close(!this.data.checkIs);
    } else {
      console.log('That bai');
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  handleSignup() {
    this.dialog.open(FormComponent);
    this.dialogRef.close();
  }

}

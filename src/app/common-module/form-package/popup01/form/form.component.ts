import { Inject } from '@angular/core';
import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication';
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
  constructor(private router: Router, public dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog,
    private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.rfContact = new FormGroup({
      userID: new FormControl(""),
      userPass: new FormControl("")
    });
  }
  get userID() {
    return this.rfContact.get("userID");
  }
  get userPass() {
    return this.rfContact.get("userPass");
  }


  handleClick() {
    if (this.rfContact.valid) {

      const formValue = this.rfContact.value;
      console.log(formValue)
      this.authentication.login(formValue.userID, formValue.userPass).subscribe(res => {
        localStorage.setItem('currentUser1', JSON.stringify(res));
        this.authentication.currentUserSubject.next(res);
        this.dialogRef.close(!this.data.checkIs);
      }, () => {
      });

    } else {
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

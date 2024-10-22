import { Inject } from '@angular/core';
import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication';
import { CartRootService } from 'src/app/core/services/cart-root/cart-root.service';
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
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
  constructor(private router: Router, public dialogRef: MatDialogRef<FormComponent>, public dialog: MatDialog,
    private authentication: AuthenticationService, private spinner: CSpinnerService, private cartRootService: CartRootService, private _snackBar: MatSnackBar) { }

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
    this.spinner.show()
    if (this.rfContact.valid) {

      const formValue = this.rfContact.value;
      this.authentication.login(formValue.userID, formValue.userPass).subscribe(res => {
        this.cartRootService.isLogin.next(true)
        this.spinner.hide()
        localStorage.setItem('currentUser1', JSON.stringify(res));
        this.authentication.currentUserSubject.next(res);
        this.dialogRef.close();
      }, (err) => {
        this.spinner.hide()
        this._snackBar.openFromComponent(SnackBarComponent, {
          data: err.error.message,
          duration: 2000,
          panelClass: ['red-snackbar'],
          verticalPosition: 'top',
        });
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

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as firebase from 'firebase';
import { WindowService } from 'src/app/core/services/window/window.service';
import { environment } from 'src/environments/environment';
import { SignupComponentComponent } from '../signup-component/signup-component.component';

@Component({
  selector: 'app-check-validatecheck-validate',
  templateUrl: './check-validatecheck-validate.component.html',
  styleUrls: ['./check-validatecheck-validate.component.scss']
})
export class CheckValidatecheckValidateComponent implements OnInit {
  windowRef: any;
  phoneNumber = null;
  verificationCode: string;
  user = false;
  constructor(private win: WindowService, public dialog: MatDialog, public dialogRef: MatDialogRef<SignupComponentComponent>) { }

  ngOnInit(): void {
    firebase.initializeApp(environment.firebaseConfig);
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }
  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber('+84' + this.phoneNumber, appVerifier).then(result => {
      this.windowRef.confirmationResult = result;
    })
      .catch(error => console.log(error));
  }
  verifyLoginCode() {
    this.windowRef.confirmationResult.confirm(this.verificationCode).then(result => {
      this.user = !this.user;
      this.dialog.open(SignupComponentComponent, {
        data: { data: this.phoneNumber }
      });
      this.dialogRef.close();
    })
      .catch(error => console.log(error, "inconrect code"))
  }

}

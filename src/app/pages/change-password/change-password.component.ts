import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailAccountService } from 'src/app/core/services/api/account/detail-account.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
import { CustomValidator } from 'src/app/core/validate-service/custom-validator';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changeForm;
  constructor(private detailAcoount: DetailAccountService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.changeForm = new FormGroup({
      customer_password: new FormControl('', [

      ]),
      customer_newPass: new FormControl('', [CustomValidator.rangeLength(8, 36)]),
      customer_reNewPass: new FormControl('', [
        CustomValidator.rangeLength(8, 36)
      ]),
    })
  }
  handleValue() {
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const dataEdit = new HttpRequestModel();
    dataEdit.body = {
      data: this.changeForm.value
    }
    this.detailAcoount.changePassword(dataEdit, httpOptions).subscribe((res) => {
      this._snackBar.openFromComponent(SnackBarComponent, {
        data: 'Thành công',
        duration: 2000,
        panelClass: ['blue-snackbar'],
        verticalPosition: 'top',
      });
    }, (err) => {
      this._snackBar.openFromComponent(SnackBarComponent, {
        data: 'Thất bại',
        duration: 2000,
        panelClass: ['red-snackbar'],
        verticalPosition: 'top',
      });
    })
  }

}

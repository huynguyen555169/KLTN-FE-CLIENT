import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomValidator } from 'src/app/common-module/form-package/popup01/custom-validator';
import { DetailAccountService } from 'src/app/core/services/api/account/detail-account.service';
import { PaymentService } from 'src/app/core/services/api/payment/payment.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-detail-account',
  templateUrl: './detail-account.component.html',
  styleUrls: ['./detail-account.component.scss']
})
export class DetailAccountComponent implements OnInit {

  detailForm: FormGroup;
  image;
  isChange = 0;
  data: any;
  dataUser: any;
  provinceList: any;
  provinceCheck: any;
  provinceID: any;

  districtList: any;
  districtCheck: any;

  wardList: any;
  constructor(private detailAccountService: DetailAccountService, private paymentService: PaymentService, private spinner: CSpinnerService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const dataGetListProvince = new HttpRequestModel();
    dataGetListProvince.params = {};
    this.paymentService.getListProvince(dataGetListProvince).subscribe((res) => {
      this.provinceList = res;
      this.detailAccountService.getInfoAccount(httpOptions).subscribe((res) => {
        this.spinner.hide()
        this.data = res.user
        this.image = this.data.customer_avatar
        const dataGetListDistrict = new HttpRequestModel();
        dataGetListDistrict.params = { province: res.user.customer_province };
        this.paymentService.getListDistrict(dataGetListDistrict).subscribe((res) => {
          this.districtList = res
        })
        const dataGetListWard = new HttpRequestModel();
        dataGetListWard.params = { province: res.user.customer_province, district: res.user.customer_district };
        this.paymentService.getListWard(dataGetListWard).subscribe((res) => {
          this.wardList = res
        })
        this.innitForm();

      })

    })


  }

  innitForm() {
    console.log(this.data.customer_province)
    this.detailForm = new FormGroup({
      customer_phone: new FormControl(this.data.customer_phone),
      customer_fullName: new FormControl(this.data.customer_fullName, [
        CustomValidator.required,
        CustomValidator.maxLength(50),
      ]),
      customer_gender: new FormControl(this.data.customer_gender),
      customer_avatar: new FormControl(this.data.customer_avatar),
      customer_birthday: new FormControl(new Date(this.data.customer_birthday)),
      customer_province: new FormControl(this.data.customer_province),
      customer_district: new FormControl(this.data.customer_district),
      customer_ward: new FormControl(this.data.customer_ward),
      customer_address: new FormControl(this.data.customer_address, [
        CustomValidator.required,
        CustomValidator.maxLength(40)
      ])
    });
  }

  handleDataAccount() {
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    this.detailForm.get('customer_avatar').setValue(this.image)
    this.dataUser = this.detailForm.value;
    const dataGetInfo = new HttpRequestModel();

    dataGetInfo.body = { data: this.dataUser, isChange: this.isChange };

    this.detailAccountService.editInfoAccount(dataGetInfo, httpOptions).subscribe((res) => {
      this.spinner.hide()
      this._snackBar.openFromComponent(SnackBarComponent, {
        data: 'Đổi thông tin thành công',
        duration: 2000,
        panelClass: ['blue-snackbar'],
        verticalPosition: 'top',
      });

    }, (error) => {
      this._snackBar.openFromComponent(SnackBarComponent, {
        data: 'Đổi thông tin thất bại',
        duration: 2000,
        panelClass: ['red-snackbar'],
        verticalPosition: 'top',
      });
    })
  }
  handleFile(e) {
    if (e) {
      this.isChange = 1;
    }
    this.image = e
  }
  handleChange(e) {


  }
  handleChange1(e) {

  }

}

import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidator } from 'src/app/common-module/form-package/popup01/custom-validator';
import { DetailAccountService } from 'src/app/core/services/api/account/detail-account.service';
import { PaymentService } from 'src/app/core/services/api/payment/payment.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';

@Component({
  selector: 'app-detail-account',
  templateUrl: './detail-account.component.html',
  styleUrls: ['./detail-account.component.scss']
})
export class DetailAccountComponent implements OnInit {

  detailForm: FormGroup;
  image;
  data: any;
  dataUser: any;
  provinceList: any;
  provinceCheck: any;
  provinceID: any;

  districtList: any;
  districtCheck: any;

  wardList: any;
  constructor(private detailAccountService: DetailAccountService, private paymentService: PaymentService, private spinner: CSpinnerService) {

  }

  ngOnInit(): void {
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    this.detailAccountService.getInfoAccount(httpOptions).subscribe((res) => {
      this.spinner.hide()
      this.data = res.user
      this.image = this.data.customer_avatar
      const dataGetListProvince = new HttpRequestModel();
      dataGetListProvince.params = {};
      this.paymentService.getListProvince(dataGetListProvince).subscribe((res) => {
        this.provinceList = res
      })


      this.detailForm = new FormGroup({
        customer_phone: new FormControl(this.data.customer_phone),
        customer_fullName: new FormControl(this.data.customer_fullName, [
          CustomValidator.required,
          CustomValidator.maxLength(50),
        ]),
        customer_gender: new FormControl(this.data.customer_gender),
        customer_avatar: new FormControl(this.data.customer_avatar),
        customer_birthday: new FormControl(this.data.customer_birthday),
        customer_province: new FormControl(this.data.customer_province),
        customer_district: new FormControl(this.data.customer_district),
        customer_ward: new FormControl(this.data.customer_ward),
        customer_address: new FormControl(this.data.customer_address, [
          CustomValidator.required,
          CustomValidator.maxLength(40)
        ])
      });
    })

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

    dataGetInfo.body = { data: this.dataUser };

    this.detailAccountService.editInfoAccount(dataGetInfo, httpOptions).subscribe((res) => {
      this.spinner.hide()

    })
  }
  handleFile(e) {
    this.image = e
  }
  handleChange(e) {
    this.provinceCheck = e;
    this.provinceID = e.value
    const dataGetListDistrict = new HttpRequestModel();
    dataGetListDistrict.params = { province: e.value };
    this.paymentService.getListDistrict(dataGetListDistrict).subscribe((res) => {
      this.districtList = res
    })

  }
  handleChange1(e) {
    this.districtCheck = e;
    const dataGetListWard = new HttpRequestModel();
    dataGetListWard.params = { province: this.provinceID, district: e.value };
    this.paymentService.getListWard(dataGetListWard).subscribe((res) => {
      this.wardList = res
    })
  }

}

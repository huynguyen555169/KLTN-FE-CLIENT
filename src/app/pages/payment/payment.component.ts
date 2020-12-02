import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidator } from 'src/app/common-module/form-package/popup01/custom-validator';
import { PaymentService } from 'src/app/core/services/api/payment/payment.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  InfoForm: FormGroup;
  provinceList: any;
  provinceCheck: any;
  provinceID: any;

  districtList: any;
  districtCheck: any;

  wardList: any;
  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    const dataGetListProvince = new HttpRequestModel();
    dataGetListProvince.params = {};
    this.paymentService.getListProvince(dataGetListProvince).subscribe((res) => {
      this.provinceList = res
      console.log(res)
    })
    this.InfoForm = new FormGroup({
      name: new FormControl("", [
        CustomValidator.required,
        CustomValidator.maxLength(36)
      ]),
      phone: new FormControl("", [
        CustomValidator.required,
        CustomValidator.numberOnly
      ]),
      email: new FormControl("", [
        CustomValidator.required,
        CustomValidator.email
      ]),
      customer_province: new FormControl(""),
      customer_district: new FormControl(""),
      customer_ward: new FormControl(""),
      address: new FormControl("", [
        CustomValidator.required,
        CustomValidator.maxLength(40)
      ])

    });
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

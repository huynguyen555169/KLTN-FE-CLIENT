import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomValidator } from 'src/app/common-module/form-package/popup01/custom-validator';
import { DetailAccountService } from 'src/app/core/services/api/account/detail-account.service';
import { CartServiceService } from 'src/app/core/services/api/cart/cart-service.service';
import { PaymentService } from 'src/app/core/services/api/payment/payment.service';
import { CartRootService } from 'src/app/core/services/cart-root/cart-root.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';

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
  data;
  listOrder;
  totalOrder;
  districtList: any;
  districtCheck: any;
  elementType = 'url';
  value = '';
  paymentType = 'cod'
  id;
  check


  wardList: any;
  constructor(private router: Router, private paymentService: PaymentService, private spinner: CSpinnerService, private _snackBar: MatSnackBar, private detailAccountService: DetailAccountService, private cartRootService: CartRootService, private cartService: CartServiceService) {
  }

  ngOnInit(): void {
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };

    const dataOrder = new HttpRequestModel();
    dataOrder.params = {};
    this.cartService.getAllCart(dataOrder, httpOptions).subscribe((res) => {
      this.listOrder = res.cart
      this.totalOrder = res.total
    })

    const dataGetListProvince = new HttpRequestModel();
    dataGetListProvince.params = {};
    this.paymentService.getListProvince(dataGetListProvince).subscribe((res) => {
      this.provinceList = res;
      this.detailAccountService.getInfoAccount(httpOptions).subscribe((res) => {
        this.spinner.hide()
        this.data = res.user
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
    this.provinceID = this.data.customer_province
    this.InfoForm = new FormGroup({
      customer_fullName: new FormControl(this.data.customer_fullName, [
        CustomValidator.required,
        CustomValidator.maxLength(36)
      ]),
      customer_phone: new FormControl(this.data.customer_phone, [
        CustomValidator.required,
        CustomValidator.numberOnly
      ]),
      email: new FormControl("", [
        CustomValidator.required,
        CustomValidator.email
      ]),
      customer_province: new FormControl(this.data.customer_province),
      customer_district: new FormControl(this.data.customer_district),
      customer_ward: new FormControl(this.data.customer_ward),
      customer_address: new FormControl(this.data.customer_address, [
        CustomValidator.required,
        CustomValidator.maxLength(40)
      ])

    });

  }
  handleChange(e) {
    this.InfoForm.get('customer_district').setValue('')
    this.InfoForm.get('customer_ward').setValue('')
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

  handleOrder() {
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const dataOrder = new HttpRequestModel();
    dataOrder.body = { customerInfo: this.InfoForm.value, data: this.listOrder, paymentType: this.paymentType };
    this.paymentService.createOrder(dataOrder, httpOptions).subscribe((res) => {
      this.check = true;
      this.id = res.orderId
      this.spinner.hide()
      this.value = res.qrCodeUrl;
      // this.router.navigate(['order-received'], { queryParams: { id: res.orderId } })
      const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': token
        })
      };
      const getListData = new HttpRequestModel();

      getListData.params = {};
      this.cartService.getAllCart(getListData, httpOptions).subscribe((res) => {
        this.cartRootService.countChange.next(res.count)
        this.cartRootService.listCartChange.next(res.cart)
        res.cart.map((e) => {
          this.data.push(e)

        })

      })
      let mess = "";
      if (this.paymentType === "momo") {
        mess = "Vui lòng quét mã QR"
      } else {
        mess = "Đặt hàng thành công"
      }
      this._snackBar.openFromComponent(SnackBarComponent, {

        data: mess,
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

  handleDetail() {
    this.router.navigate(['order-received'], { queryParams: { id: this.id } })
  }
}

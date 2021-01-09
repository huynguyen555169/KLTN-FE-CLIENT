import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailAccountService } from 'src/app/core/services/api/account/detail-account.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.scss']
})
export class UserProductComponent implements OnInit {
  dataTab = [
    {
      label: 'Tất cả'
    },
    {
      label: 'Chờ xác nhận'
    }, {
      label: 'Chờ lấy hàng'
    },
    {
      label: 'Đang giao'
    },
    {
      label: 'Đã giao'
    },
    {
      label: 'Đã huỷ'
    }

  ]
  data;
  status;
  arrStatus;
  arrId;
  dataMaster;
  statusCheck;

  constructor(private orderService: DetailAccountService, private spinner: CSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const dataGetOrder = new HttpRequestModel();
    dataGetOrder.params = { status: '' }
    this.orderService.getOrder(dataGetOrder, httpOptions).subscribe((res) => {
      this.spinner.hide()
      this.dataMaster = res.data
      this.data = res.data.map((i) => {
        return i.order_detail
      });

      this.arrStatus = res.data.map((i) => {
        return i.order_status_fk
      });

      this.arrId = res.data.map((i) => {
        return i.order_id
      });

      this.arrId = this.arrId.flat()
      this.arrStatus = this.arrStatus.flat()
    })
  }
  handleChange(e) {

    this.statusCheck = e.index
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const dataGetOrder = new HttpRequestModel();
    dataGetOrder.params = { status: e.index }
    this.orderService.getOrder(dataGetOrder, httpOptions).subscribe((res) => {
      this.spinner.hide()
      this.dataMaster = res.data
      this.data = res.data.map((i) => {
        return i.order_detail
      });

    })
  }
  handleCancel(e) {
    if (this.statusCheck === undefined) {
      this.statusCheck = ''
    }
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const dataCancle = new HttpRequestModel();
    dataCancle.body = { id: e }
    this.orderService.cancelOrder(dataCancle, httpOptions).subscribe((res) => {
      const dataGetOrder = new HttpRequestModel();
      dataGetOrder.params = { status: this.statusCheck }
      this.orderService.getOrder(dataGetOrder, httpOptions).subscribe((res) => {
        this.spinner.hide()
        this.dataMaster = res.data
        this.data = res.data.map((i) => {
          return i.order_detail
        });

        if (this.statusCheck === '') {
          this.arrStatus = res.data.map((i) => {
            return i.order_status_fk
          });

          this.arrId = res.data.map((i) => {
            return i.order_id
          });

          this.arrId = this.arrId.flat()
          this.arrStatus = this.arrStatus.flat()
        }

      })
    })
  }
  handleDetail(e) {
    this.router.navigate(['order-received'], { queryParams: { id: e } })
  }

}

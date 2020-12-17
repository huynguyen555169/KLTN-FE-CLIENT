import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
      label: 'Tấc cả'
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

  constructor(private orderService: DetailAccountService, private spinner: CSpinnerService) { }

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
      this.data = res.data.map((i) => {
        return i.order_detail
      });
      this.data = this.data.flat()
      console.log(this.data)
    })
  }
  handleChange(e) {
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
      this.data = res.data.map((i) => {
        return i.order_detail
      });
      this.data = this.data.flat()
    })
  }

}

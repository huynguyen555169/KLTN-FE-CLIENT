import { Component, OnInit } from '@angular/core';
import { menus, logo, iconColor, pageNoti, notificationList, data, position, footerData } from './mockData';
import { NavigationEnd, Router } from '@angular/router';
import { CSpinnerService } from '../shared/c-spinner/c-spinner.service';
import { CartServiceService } from '../core/services/api/cart/cart-service.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpRequestModel } from '../core/services/http-request-service/http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  isShow = false;
  menus = menus;
  logo = logo;
  iconColor = iconColor;
  pageNoti = pageNoti;
  dataCart = [];
  //noti01
  notificationList = notificationList;
  // menu02
  data: any;
  position = position;
  //check to login
  count = 0;

  //footer01
  footerData = footerData;
  constructor(private router: Router, private spinner: CSpinnerService, private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.data = JSON.parse(localStorage.getItem('currentUser1')).user;
    if (this.data) {
      const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': token
        })
      };
      const getListData = new HttpRequestModel();

      getListData.params = {};
      this.cartService.getAllCart(getListData, httpOptions).subscribe((res) => {
        console.log(res)
        this.count = res.count
        res.cart.map((item) => {
          this.dataCart.push(item.productInfo)
        })
      })
    }
  }
  handleItemClick(event) {
    this.router.navigate([event.link]);
  }
  menuClick($event) {
    if ($event.name === "Đăng xuất") {
      localStorage.removeItem('currentUser1');
      this.router.navigate(['']);
    }
    if ($event.name === "Thông tin cá nhân") {
      this.router.navigate(['/detail-account']);
    }
  }
  handle($event) {
  }
  handleCheck($event) {
  }
  handleCartLink() {
    this.router.navigate(['cart']);
  }
}

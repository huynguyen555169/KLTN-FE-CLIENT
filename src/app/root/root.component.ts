import { Component, OnInit } from '@angular/core';
import { menus, logo, iconColor, pageNoti, notificationList, data, position, footerData } from './mockData';
import { NavigationEnd, Router } from '@angular/router';
import { CSpinnerService } from '../shared/c-spinner/c-spinner.service';
import { CartServiceService } from '../core/services/api/cart/cart-service.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpRequestModel } from '../core/services/http-request-service/http-request.service';
import { AuthenticationService } from '../core/authentication/authentication';
import { CartRootService } from '../core/services/cart-root/cart-root.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  isShow = false;
  isLogin;
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
  constructor(private router: Router, private spinner: CSpinnerService, private cartService: CartServiceService, private authenService: AuthenticationService, private cartRootService: CartRootService) { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('currentUser1'))) {
      this.cartRootService.isLogin.next(true)
    }
    this.cartRootService.isLogin.subscribe((res) => {
      {
        this.isLogin = res
      }
    })
    this.cartRootService.countChange.subscribe((res) => {
      {
        this.count = res
      }
    })
    this.cartRootService.listCartChange.subscribe((res) => {
      this.dataCart = res
      this.getData()
    })
    this.authenService.currentUser.subscribe((res) => {
      if (res) {
        this.data = res.user;
        this.getData();
      }
    })
  }

  getData() {
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const getListData = new HttpRequestModel();

    getListData.params = {};
    this.cartService.getAllCart(getListData, httpOptions).subscribe((res) => {
      this.count = res.count;
      this.dataCart = res.cart.map((item) => item.productInfo);
    })

  }
  handleItemClick(event) {
    this.router.navigate([event.link]);
  }
  menuClick($event) {
    if ($event.name === "Đăng xuất") {
      localStorage.removeItem('currentUser1');
      this.cartRootService.isLogin.next(false)
      this.cartRootService.countChange.next(0)
      this.router.navigate(['']);
    }
    if ($event.name === "Thông tin cá nhân") {
      this.router.navigate(['/detail-account']);
    }
    if ($event.name === "Đổi mật khẩu") {
      this.router.navigate(['/change-password']);
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

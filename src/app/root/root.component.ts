import { Component, OnInit } from '@angular/core';
import { menus, logo, iconColor, pageNoti, notificationList, data, position, footerData } from './mockData';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CSpinnerService } from '../shared/c-spinner/c-spinner.service';

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
  //noti01
  notificationList = notificationList;
  // menu02
  data: any;
  position = position;
  //check to login
  isCheck: any;

  //footer01
  footerData = footerData;
  constructor(private router: Router, private spinner: CSpinnerService) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('currentUser1')).user;
    console.log(this.data)
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.isShow = e.urlAfterRedirects === '/admin';
      }
    }
    );
  }
  handleItemClick(event) {
    this.router.navigate([event.link]);
  }
  menuClick($event) {
    this.spinner.show()
    if ($event.name === "Đăng xuất") {
      localStorage.removeItem('currentUser1');
      this.router.navigate(['']);
    }
  }
  handle($event) {
    console.log($event);
  }
  handleCheck($event) {

    this.isCheck = $event;
    console.log(this.isCheck);
  }
  handleCartLink() {
    this.router.navigate(['cart']);
  }
}

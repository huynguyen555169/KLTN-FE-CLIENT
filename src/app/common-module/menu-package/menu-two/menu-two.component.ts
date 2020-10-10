import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-two',
  templateUrl: './menu-two.component.html',
  styleUrls: ['./menu-two.component.scss']
})
export class MenuTwoComponent implements OnInit {
  @Input() data: MenuTwoDataModel;
  @Input() position = 'after';
  @Output() actionClick = new EventEmitter<MenuTwoMenuItemModel>();

  isOpened = false;
  constructor() {}

  ngOnInit(): void {}
  menuItemClick(event: MenuTwoMenuItemModel) {
    this.actionClick.emit(event);
  }
  handleOpened() {
    this.isOpened = true;
  }
  handleClosed() {
    this.isOpened = false;
  }
}

export class MenuTwoDataModel {
  userInfo: MenuTwoUserInfoModel;

  menuItems: MenuTwoMenuItemModel[];
}

export class MenuTwoUserInfoModel {
  avatar: string; // Image url,
  fullName: string;
  email: string;
}

export class MenuTwoMenuItemModel {
  icon: string; // class of material icon,
  name: string;
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.scss']
})
export class MenuOneComponent implements OnInit {
  @Input() menus: MenuItemModel[] = [];
  @Input() logo: string;
  @Output() itemClick = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  handleItemClick(item: any) {
    this.menus = this.menus.map(menu => {
      menu.isActive = menu === item;
      return menu;
    });
    this.itemClick.emit(item);
  }
}

export class MenuItemModel {
  name: string;
  isActive: boolean;
  link: string;

  constructor(data: any) {
    this.name = data.name;
    this.isActive = !!data.isActive;
    this.link = data.link;
  }
}

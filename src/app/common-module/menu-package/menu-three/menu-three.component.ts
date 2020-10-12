import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'app-menu-three',
  templateUrl: './menu-three.component.html',
  styleUrls: ['./menu-three.component.scss']
})
export class MenuThreeComponent implements OnInit, OnChanges {
  expanded: boolean;
  @Input() data: {
    backgroundUserImage?: string;
    userInfo: any;
    urls: MenuTreeNodeModel[];
    footActions: MenuTreeNodeModel[];
  };

  @Input() width: number;
  constructor() {}

  isOpen = true;

  ngOnInit(): void {
    this.width = this.width ? this.width : 300;
  }

  ngOnChanges(changes: SimpleChanges) {}
}

export class MenuTreeNodeModel {
  id: string;
  name: string;
  url: string;
  icon: string;
  children: MenuTreeNodeModel[];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.url = data.url;
    this.icon = data.icon;
    this.children = data.children
      ? data.children.map(child => new MenuTreeNodeModel(child))
      : [];
  }
}

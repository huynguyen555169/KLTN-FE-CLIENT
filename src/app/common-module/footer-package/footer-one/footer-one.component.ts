import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.scss']
})
export class FooterOneComponent implements OnInit {
  @Input() data: FooterOneModel;

  constructor() {}

  ngOnInit(): void {}
}

export class FooterOneModel {
  title: string;
  content: {
    icon: string;
    title: string;
    description: string;
    more: string;
  }[];
  phone: {
    icon: string;
    number: string;
  }[];
  titleSocial: string;
  social: {
    icon: string;
    link: string;
  }[];
  copyright: string;
  moreInfo: string;

  constructor(data: any) {
    this.title = data.tilte;
    this.content = data.content;
    this.phone = data.phone;
    this.titleSocial = data.titleSocial;
    this.social = data.social;
    this.copyright = data.copyright;
    this.moreInfo = data.moreInfo;
  }
}

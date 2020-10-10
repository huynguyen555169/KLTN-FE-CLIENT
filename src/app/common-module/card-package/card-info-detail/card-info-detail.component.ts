import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-info-detail',
  templateUrl: './card-info-detail.component.html',
  styleUrls: ['./card-info-detail.component.scss']
})
export class CardInfoDetailComponent implements OnInit {
  @Input() data: CardInfoDetailModel; // Card data
  constructor() {}

  ngOnInit(): void {}
}

export class CardInfoDetailModel {
  title: string;
  imageUrl: string;
  infos: { title: string; content: string }[];

  constructor(data: any) {
    this.title = data.title;
    this.imageUrl = data.imageUrl;
    this.infos = data.infos;
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-five',
  templateUrl: './card-five.component.html',
  styleUrls: ['./card-five.component.scss']
})
export class CardFiveComponent implements OnInit {
  @Input() slideList: CardSlideListModel[];
  @Input() type: string;
  constructor() {}

  ngOnInit(): void {}
}

export class CardSlideListModel {
  description: string;
  percent: number;

  constructor(data: any) {
    this.description = data.description;
    this.percent = data.percent;
  }
}

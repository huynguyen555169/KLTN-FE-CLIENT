import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.scss']
})
export class CardLabelComponent implements OnInit {
  @Input() data: CardLabelModel[];
  constructor() {}

  ngOnInit(): void {}
}

export class CardLabelModel {
  icon: string;
  title: string;
  content: string;

  constructor(data: any) {
    this.icon = data.icon;
    this.title = data.title;
    this.content = data.content;
  }
}

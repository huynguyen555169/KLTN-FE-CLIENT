import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-slide-two-item',
  templateUrl: './slide-two-item.component.html',
  styleUrls: ['./slide-two-item.component.scss']
})
export class SlideTwoItemComponent implements OnInit, OnChanges {
  @Input() data: SlideTwoItemModel;

  constructor() {}
  arrayStars = Array<number>();
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue) {
      let rate = this.data.star || 0;
      for (let i = 0; i < 5; i++) {
        if (rate > 1) {
          this.arrayStars.push(100);
        } else if (rate > 0) {
          this.arrayStars.push(rate * 100);
        } else {
          this.arrayStars.push(0);
        }
        rate--;
      }
    }
  }
}

export class SlideTwoItemModel {
  img: string; // image of slide
  star: number; // rating of slide
  description: string; // description of slide
  title: string; // title of slide
  subtitle: string; // subtitle of slide

  constructor(data: any) {
    this.img = data.img;
    this.star = data.star;
    this.description = data.description;
    this.title = data.title;
    this.subtitle = data.subtitle;
  }
}

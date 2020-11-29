import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class CardOneComponent implements OnInit, OnChanges {
  @Input() cardData: CardOneModel;
  @Output() actionClick = new EventEmitter<CardOneModel>();
  @Output() heartClick = new EventEmitter<boolean>();

  arrayStars = Array<number>();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cardData.currentValue) {
      let rate = this.cardData.star || 0;
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
  handleClick() {
    this.actionClick.emit(this.cardData);
  }
  handleHeartClick() {
    this.cardData.isFavorite = !this.cardData.isFavorite;
    this.heartClick.emit(this.cardData.isFavorite);
  }
}
export class CardOneModel {
  img: string; // background of card
  discount: string; // percent of discount
  title: string; // title of card
  chips: string[]; // tối đa 3 chips sẽ hiện, chip thứ 4 sẽ là +N (N: số còn lại)
  subTitle: string; // subTitle of card
  star: number; // number of stars in card
  total: number; // amount of reviewer for card (star)
  description: string; // description of card
  subContent: string; // price of currently
  subReContent: string; // price before discount
  isFavorite: boolean;
  more: string; // name of action

  constructor(data: any) {
    this.img = data.img;
    this.discount = data.discount;
    this.title = data.title;
    this.chips = data.chips;
    this.subTitle = data.subTitle;
    this.star = data.star;
    this.total = data.total;
    this.description = data.description;
    this.subContent = data.subContent;
    this.subReContent = data.subReContent;
    this.isFavorite = data.isFavorite;
    this.more = data.more;
  }
}

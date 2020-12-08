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
  id: string;
  img: any; // background of card
  discount: string; // percent of discount
  title: string; // title of card
  chips: string; // tối đa 3 chips sẽ hiện, chip thứ 4 sẽ là +N (N: số còn lại)
  subTitle: string; // subTitle of card
  star: number; // number of stars in card
  total: number; // amount of reviewer for card (star)
  description: string; // description of card
  subContent: number; // price of currently
  subReContent: number; // price before discount
  isFavorite: boolean;
  more: string; // name of action

  constructor(data: any) {
    this.id = data.product_id;
    this.img = data.product_images;
    this.discount = data.product_discount;
    this.title = data.product_name;
    this.chips = data.product_type.product_type_name;
    this.subTitle = data.subTitle;
    this.star = data.star;
    this.total = data.total;
    this.description = data.product_description;
    this.subContent = data.product_paid_price;
    this.subReContent = data.product_unit_price;
    this.isFavorite = data.isFavorite;
    this.more = data.more;
  }
}

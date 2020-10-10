import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-card-one",
  templateUrl: "./card-one.component.html",
  styleUrls: ["./card-one.component.scss"],
})
export class CardOneComponent implements OnInit {
  @Input() cardData: CardOneModel;
  @Output() actionClick = new EventEmitter<CardOneModel>();
  checkClick = false;

  constructor() {}
  arrayStars = Array<number>();

  ngOnInit(): void {}
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
  heartClick() {
    this.checkClick = !this.checkClick;
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
  more: string; // name of action

  constructor(data?: any) {
    if (data) {
      this.img = data.image;
      this.discount = `${data.percentage}%`;
      this.title = data.course_title;
      this.chips = data.course_tag;
      this.subTitle = `with  ${data.instructor_name}`;
      this.star = data.avg_rating;
      this.total = data.count_rating;
      this.description = data.course_description;
      this.subContent = data.price_course;
      this.subReContent = data.discount_price;
      this.more = "MORE";
    }
  }
  parseData(data: any) {
    return {
      img: data.image,
      discount: data.percentage,
      title: data.title,
      chips: data.tag,
      subTitle: data.subTitle,
      star: data.avgRating,
      total: data.countRating,
      description: data.description,
      subContent: data.price,
      subReContent: data.priceDiscount,
      more: "MORE",
    };
  }
}

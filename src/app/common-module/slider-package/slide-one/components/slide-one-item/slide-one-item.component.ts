import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-slide-one-item",
  templateUrl: "./slide-one-item.component.html",
  styleUrls: ["./slide-one-item.component.scss"],
})
export class SlideOneItemComponent implements OnInit, OnChanges {
  @Input() data: SlideOneItemModel;
  @Output() actionClick = new EventEmitter<SlideOneItemModel>();
  constructor() {}
  arrayStars = new Array<number>();
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue) {
      let rate = this.data.rating || 0;
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

export class SlideOneItemModel {
  img: string;
  title: string;
  subTitle: string;
  rating: number;
  totalRating: number;
  contents: string[];
  description: string;
  chips: string[];
  price: number;
  oldPrice: number;

  constructor(data: any) {
    this.img = data.image;
    this.title = data.course_title;
    this.subTitle = data.instructor_name;
    this.rating = data.avg_rating;
    this.totalRating = data.count_rating;
    this.description = data.description;
    this.chips = data.course_tag;
    this.contents = [data.time, data.lesson, data.count_enrolled];
    this.price = data.price_course;
    this.oldPrice = data.discount_price;
  }
}

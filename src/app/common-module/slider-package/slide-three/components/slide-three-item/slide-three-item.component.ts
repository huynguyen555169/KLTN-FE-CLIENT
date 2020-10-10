import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-slide-three-item",
  templateUrl: "./slide-three-item.component.html",
  styleUrls: ["./slide-three-item.component.scss"],
})
export class SlideThreeItemComponent implements OnInit, OnChanges {
  @Input() data: SlideThreeItemModel;
  @Output() actionClick = new EventEmitter<SlideThreeItemModel>();
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

export class SlideThreeItemModel {
  img: string;
  title: string;
  subTitle: string;
  rating: number;
  totalRating: number;
  description: string;
  chips: string[];

  constructor(data: any) {
    this.img = data.avatar;
    this.title = data.instructor_name;
    this.subTitle = data.introduce;
    this.rating = data.avg_rating;
    this.totalRating = data.count_rating;
    this.description = data.workplace;
    this.chips = data.tags;
  }
}

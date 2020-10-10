import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-card-two",
  templateUrl: "./card-two.component.html",
  styleUrls: ["./card-two.component.scss"],
})
export class CardTwoComponent implements OnInit {
  @Input() data: CardTwoModel; // Card data
  @Input() imageBefore = true; // Show image before/after
  @Input() actions = false; // Show button More
  @Output() actionClick = new EventEmitter<any>(); // Button More click

  constructor() {}

  arrayStars = Array<number>();

  ngOnInit(): void {
    let rate = this.data.rate || 0;
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

export class CardTwoModel {
  imageUrl: string;
  title: string;
  master: string;
  description: string;
  sessions: number;
  countStudent: number;
  price: string;
  rate: number;

  constructor(data: any) {
    this.imageUrl = data.image;
    this.title = data.course_title;
    this.master = data.instructor_name;
    this.description = data.course_description;
    this.sessions = data.lesson;
    this.price = data.price_course;
    this.countStudent = data.count_enrolled;
    this.rate = data.avg_rating;
  }
}

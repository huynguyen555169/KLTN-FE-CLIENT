import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-ten",
  templateUrl: "./card-ten.component.html",
  styleUrls: ["./card-ten.component.scss"],
})
export class CardTenComponent implements OnInit {
  @Input() cardData: CardTenModel;
  @Input() direction = "left";
  @Input() active = false;
  constructor() {}

  ngOnInit(): void {}
  // handleClick() {
  //   this.active = !this.active;
  // }
}
export class CardTenModel {
  img: string;
  title: string;
  description: string;
  position: string;

  constructor(data: any) {
    this.img = data.img;
    this.title = data.title;
    this.description = data.description;
    this.position = data.position;
  }
}

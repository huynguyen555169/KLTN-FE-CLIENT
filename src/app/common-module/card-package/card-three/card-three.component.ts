import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-three",
  templateUrl: "./card-three.component.html",
  styleUrls: ["./card-three.component.scss"],
})
export class CardThreeComponent implements OnInit {
  @Input() user: any;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-label-one",
  templateUrl: "./label-one.component.html",
  styleUrls: ["./label-one.component.scss"],
})
export class LabelOneComponent implements OnInit {
  @Input() labels: LabelOneModel[] = [];
  @Input() startCount = false;
  constructor() {}

  ngOnInit(): void {}
}

export class LabelOneModel {
  icon: string;
  unit: string;
  number: string | number;
}

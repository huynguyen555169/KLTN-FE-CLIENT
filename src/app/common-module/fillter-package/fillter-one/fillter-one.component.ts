import { Component, Input, OnInit } from '@angular/core';
import { Options } from 'ng5-slider/options';

@Component({
  selector: 'app-fillter-one',
  templateUrl: './fillter-one.component.html',
  styleUrls: ['./fillter-one.component.scss']
})
export class FillterOneComponent implements OnInit {

  @Input() data: any;
  value: any = 0;
  highValue: any = 1000000;
  options: Options = {
    floor: this.value,
    ceil: this.highValue,
  };

  constructor() { }

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  formatLabel1(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  handleClick() {
    console.log(`đây là giá trị của min: ${this.value}`);
    console.log(`đây là giá trị của max: ${this.highValue}`);
  }
}

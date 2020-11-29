import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-max-min-two',
  templateUrl: './search-max-min-two.component.html',
  styleUrls: ['./search-max-min-two.component.scss'],
})
export class SearchMaxMinTwoComponent implements OnInit {
  @Input() data: any;
  @Output() newRangeValue = new EventEmitter();
  value: any;
  highValue: any;
  options: Options;

  constructor() { }

  ngOnInit(): void {
    this.value = this.data.minValue;
    this.highValue = this.data.maxValue;
    this.options = {
      floor: this.value,
      ceil: this.highValue,
    };
  }
  handleClick() {
    const newData = {};
    Object.assign(newData, { min: this.value, max: this.highValue });
    this.newRangeValue.emit(newData);
  }
}

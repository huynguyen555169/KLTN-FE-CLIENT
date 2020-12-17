import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss']
})
export class CardOrderComponent implements OnInit, OnChanges {
  @Input() data: any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.data.currentValue)
  }

  ngOnInit(): void {
  }

}

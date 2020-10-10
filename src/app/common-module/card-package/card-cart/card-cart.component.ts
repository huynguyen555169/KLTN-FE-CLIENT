import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
  styleUrls: ['./card-cart.component.scss']
})
export class CardCartComponent implements OnInit {
  @Input() data: any;

  number = 1;
  checked = false;
  total;

  constructor() { }

  ngOnInit(): void {
    this.total = this.data.product_unit_price;
  }
  handlePlus() {
    this.number = this.number + 1;
    this.total = this.data.product_unit_price * this.number
  }
  handleMinus() {
    this.number = this.number - 1;
    this.total = this.total - this.data.product_unit_price
  }
  handleDelete() {

  }

}

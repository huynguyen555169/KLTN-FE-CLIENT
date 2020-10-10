import { Component, OnInit } from '@angular/core';
import { data } from './mockData';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  data = data;
  constructor() { }

  ngOnInit(): void {
  }

}

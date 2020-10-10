import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from './mockData';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  data = data;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleFashion() {
    this.router.navigate([`product/${data[0].link}`
    ]);
  }
  handleShoes() {

  }
  handleWallets() {

  }
  handleBelts() {

  }
  handleWatch() {

  }
}

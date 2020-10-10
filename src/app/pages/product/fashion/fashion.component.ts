import { Component, OnInit } from '@angular/core';
import { data, dataProduct } from './mockData';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {

  data = data
  dataProduct = dataProduct;
  constructor() { }

  ngOnInit(): void {
  }

}

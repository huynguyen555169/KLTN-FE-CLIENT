import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { dataList } from './mockData';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {

  @Output() actionItemClick = new EventEmitter<any>();
  @Output() actionHeartClick = new EventEmitter<any>();
  // data = data
  dataProduct = dataList;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleRangeValue(e) {

  }
  handleValue(e) {
    console.log(e)
  }
  handleProduct(e) {
    console.log(e)
    this.router.navigate(['detail-product'], { state: { e } })
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { dataList } from './mockData';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {

  @Output() actionItemClick = new EventEmitter<any>();
  @Output() actionHeartClick = new EventEmitter<any>();
  // data = data
  dataProduct = dataList;
  data = {
    minValue: 0,
    maxValue: 10000
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleRangeValue(e) {

  }
  handleValue(e) {
    console.log(e)
  }
  handleProduct(e) {
    // console.log(e)
    // this.router.navigate(['detail-product'], { state: { e } })
  }

}

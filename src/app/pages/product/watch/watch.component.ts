import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { dataList } from './mockData';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  @Output() actionItemClick = new EventEmitter<any>();
  @Output() actionHeartClick = new EventEmitter<any>();
  // data = data
  data = {
    minValue: 0,
    maxValue: 10000
  }
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
    // console.log(e)
    // this.router.navigate(['detail-product'], { state: { e } })
  }

}

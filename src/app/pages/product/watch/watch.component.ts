import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardOneModel } from 'src/app/common-module/card-package/card-one/card-one.component';
import { FashionService } from 'src/app/core/services/api/fashion/fashion.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
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
  totalPage = 9;
  dataProduct = dataList;

  constructor(private router: Router, private getListFashion: FashionService) { }

  ngOnInit(): void {
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { type: 5 };
    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.totalPage = res.countPage
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
      console.log(res)
    }, (error) => {
    })
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
  handlePageChange(e) {

  }

}

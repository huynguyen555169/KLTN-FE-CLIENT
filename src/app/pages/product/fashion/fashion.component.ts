import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardOneModel } from 'src/app/common-module/card-package/card-one/card-one.component';
import { FashionService } from 'src/app/core/services/api/fashion/fashion.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
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
  currentPage = 1;
  data = {
    minValue: 0,
    maxValue: 1000000
  }
  value;
  sort;
  totalPage: any;

  constructor(private router: Router, private getListFashion: FashionService) { }

  ngOnInit(): void {
    this.value = JSON.stringify({
      minValue: 0,
      maxValue: 1000000
    })
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { type: 2 };
    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.totalPage = res.countPage
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
    }, (error) => {
    })
  }

  handleRangeValue(value) {
    console.log(value)
    this.value = value
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { value: value, type: 2, sort: this.sort };

    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.currentPage = 1;
      this.totalPage = res.countPage
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
      console.log(res)
    }, (error) => {
    })

  }
  handleValue(e) {
    this.sort = e.value

    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { sort: e.value, type: 2, value: this.value };
    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.totalPage = res.countPage
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
    }, (error) => {
    })
  }
  handleProduct(e) {
    console.log(e)
    this.router.navigate(['detail-product'], { state: { e } })
  }

  handlePageChange(e) {
    this.currentPage = e;
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { currentPage: this.currentPage };
    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
    }, (error) => {
    })

  }
}

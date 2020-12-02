import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardOneModel } from 'src/app/common-module/card-package/card-one/card-one.component';
import { FashionService } from 'src/app/core/services/api/fashion/fashion.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
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
  currentPage = 1;
  totalPage: any;
  value;
  sort;
  data = {
    minValue: 0,
    maxValue: 10000
  }

  constructor(private router: Router, private getListFashion: FashionService) { }

  ngOnInit(): void {
    this.value = JSON.stringify({
      minValue: 0,
      maxValue: 1000000
    })
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { type: 1 };
    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.totalPage = res.countPage
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
      console.log(res)
    }, (error) => {
    })
  }

  handleRangeValue(value) {
    this.value = value
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { value: value, type: 1, sort: this.sort };

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
    dataGetListFashion.params = { sort: e.value, type: 1, value: this.value };
    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.totalPage = res.countPage
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
    }, (error) => {
    })
  }
  handleProduct(e) {
    // console.log(e)
    // this.router.navigate(['detail-product'], { state: { e } })
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

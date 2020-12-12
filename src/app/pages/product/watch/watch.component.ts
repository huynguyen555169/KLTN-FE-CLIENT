import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardOneModel } from 'src/app/common-module/card-package/card-one/card-one.component';
import { FashionService } from 'src/app/core/services/api/fashion/fashion.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  @Output() actionItemClick = new EventEmitter<any>();
  @Output() actionHeartClick = new EventEmitter<any>();
  // data = data
  dataProduct;
  currentPage = 1;
  data = {
    minValue: 0,
    maxValue: 1000000
  }
  value;
  sort;
  totalPage: any;

  constructor(private router: Router, private getListFashion: FashionService, private spinner: CSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.value = JSON.stringify({
      minValue: 0,
      maxValue: 1000000
    })
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { type: 3 };
    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.spinner.hide()
      this.totalPage = res.countPage
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
    }, (error) => {
    })
  }

  handleRangeValue(value) {
    this.spinner.show()
    this.value = value
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { value: value, type: 3, sort: this.sort };

    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.spinner.hide()
      this.currentPage = 1;
      this.totalPage = res.countPage
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
    }, (error) => {
    })

  }
  handleValue(e) {
    this.spinner.show()
    this.sort = e.value

    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { sort: e.value, type: 3, value: this.value };
    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.spinner.hide()
      this.totalPage = res.countPage
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
    }, (error) => {
    })
  }
  handleProduct(e) {
    let nameInRoute: String = e.title.split(' ').join('-');
    this.router.navigate(['detail-product'], { queryParams: { name: nameInRoute } })
  }

  handlePageChange(e) {
    this.spinner.show()
    this.currentPage = e;
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { currentPage: this.currentPage, type: 3 };
    this.getListFashion.getListFashion(dataGetListFashion).subscribe((res) => {
      this.spinner.hide()
      this.dataProduct = res.data.map((data) => new CardOneModel(data));
    }, (error) => {
    })

  }
}

import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/core/services/api/cart/cart-service.service';
import { DetailService } from 'src/app/core/services/api/detail/detail.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  data: any;
  qty = 1;
  dataType = [{
    key: '1',
    value: 'M'
  }, {
    key: '2',
    value: 'L'
  }]
  dataTest = ['https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',]
  panelOpenState = false;

  productCurrent;

  constructor(private router: Router, private detailService: DetailService, private route: ActivatedRoute, private cartService: CartServiceService, private spinner: CSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show()
    const routeParams = this.route.snapshot.params;
    let name = routeParams.id.split('-').join(' ');
    const dataGetItem = new HttpRequestModel();
    dataGetItem.params = { name: name };
    this.detailService.getListFashion(dataGetItem).subscribe((res) => {
      this.spinner.hide()
      this.data = res.data[0]
    })

  }

  addToCart() {
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const dataAdd = new HttpRequestModel();
    dataAdd.body = { product_id: this.data.product_id, qty: this.qty };
    this.cartService.addProduct(dataAdd, httpOptions).subscribe((res) => {
      this.spinner.hide()

    })

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/core/services/api/detail/detail.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  data = {
    product_images: [],
    product_name: 'Sản phẩm A',
    product_qty: 10,
    product_unit_price: 200000,
    product_type: 'fashion',
    product_size: '1',
    product_description: 'Sản phẩm đạt chất lượng cao'
  }
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

  constructor(private router: Router, private detailService: DetailService) {
    this.productCurrent = this.router.getCurrentNavigation().extras.state
    let productItem = this.router.getCurrentNavigation().extras.state

    const dataGetItem = new HttpRequestModel();
    dataGetItem.params = { id: productItem.e.id };
    console.log(dataGetItem)
    this.detailService.getListFashion(dataGetItem).subscribe((res) => {
      console.log(res)
      this.data = res
    })
  }

  ngOnInit(): void {

  }

  addToCart() {
    localStorage.setItem('currentProduct', JSON.stringify(this.productCurrent));
  }

}

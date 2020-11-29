import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  dataTest = ['https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'https://images.unsplash.com/photo-1527519124254-9dafd8b3533b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80']
  panelOpenState = false;
  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state); // should log out 'bar'
  }

  ngOnInit(): void {

  }

  addToCart() {

  }

}

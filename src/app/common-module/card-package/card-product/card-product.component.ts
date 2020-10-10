import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() dataProduct: any;

  data = {
    product_image1: 'https://image.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
    product_image2: 'https://image.freepik.com/free-photo/young-handsome-man-model-posing-street_1303-14516.jpg',
    product_name: 'TƯST',
    product_number: '',
    product_type_fk: '',
    product_size_fk: '',
    product_unit_price: '123456',
    product_paid_price: '',
    product_discount: '',
    product_description: 'ABC'


  }
  constructor() { }

  ngOnInit(): void {
  }

}

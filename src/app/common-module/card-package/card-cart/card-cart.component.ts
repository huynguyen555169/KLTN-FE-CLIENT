import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartServiceService } from 'src/app/core/services/api/cart/cart-service.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';


@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
  styleUrls: ['./card-cart.component.scss']
})
export class CardCartComponent implements OnInit {
  @Input() data: any;
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() totalMax = new EventEmitter<any>()

  checked = false;

  constructor(private cartService: CartServiceService) {

  }

  ngOnInit(): void {
  }
  handlePlus() {
    this.data.cart_product_qty = this.data.cart_product_qty + 1;
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const getListData = new HttpRequestModel();

    getListData.body = { product_id: this.data.productInfo.product_id, qty: this.data.cart_product_qty };
    this.cartService.updateQty(getListData, httpOptions).subscribe((res) => {
      this.data.total = res.total
      this.totalMax.emit(res.totalCart)
    })

  }
  handleMinus() {

    this.data.cart_product_qty = this.data.cart_product_qty - 1;
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const getListData = new HttpRequestModel();

    getListData.body = { product_id: this.data.productInfo.product_id, qty: this.data.cart_product_qty };
    this.cartService.updateQty(getListData, httpOptions).subscribe((res) => {
      this.data.total = res.total
      this.totalMax.emit(res.totalCart)
    })
  }
  handleDelete() {
    this.newItemEvent.emit(this.data.productInfo.product_id)


  }

}

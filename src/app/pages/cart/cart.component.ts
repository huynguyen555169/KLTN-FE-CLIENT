import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/core/services/api/cart/cart-service.service';
import { CartRootService } from 'src/app/core/services/cart-root/cart-root.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  data = [];
  total: any;
  count: any;
  totalMax: any;
  constructor(private cartService: CartServiceService, private spinner: CSpinnerService, private cartRootService: CartRootService) { }

  ngOnInit(): void {
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const getListData = new HttpRequestModel();

    getListData.params = {};
    this.cartService.getAllCart(getListData, httpOptions).subscribe((res) => {
      this.spinner.hide()
      this.count = res.count
      this.totalMax = res.total
      this.total = res.total;
      res.cart.map((e) => {
        this.data.push(e)

      })

    })

  }
  handleDeleteItem(e) {
    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const deleteItem = new HttpRequestModel();
    deleteItem.body = { data: [e] };
    const indexInList = this.data.findIndex(d => d.productInfo.product_id === e);
    this.cartService.deleteProduct(deleteItem, httpOptions).subscribe((res) => {
      if (res.message === 'Xóa giỏ hàng thành công') {
        this.count -= 1;
        this.cartRootService.countChange.next(this.count);
        this.spinner.hide();
        this.totalMax -= this.data[indexInList].total;
        this.data.splice(indexInList, 1);

      }

    })
  }
  handleTotalMax(e) {
    this.totalMax = e
  }

}

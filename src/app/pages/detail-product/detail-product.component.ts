import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FormComponent } from 'src/app/common-module/form-package/popup01/form/form.component';
import { CartServiceService } from 'src/app/core/services/api/cart/cart-service.service';
import { DetailService } from 'src/app/core/services/api/detail/detail.service';
import { CartRootService } from 'src/app/core/services/cart-root/cart-root.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';
import { CSpinnerService } from 'src/app/shared/c-spinner/c-spinner.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  dataStar = [
    {
      name: 'Tấc cả',
      type: 'all',
      isActive: true
    },
    {
      name: '1 Sao',
      type: '1',
      isActive: false
    },
    {
      name: '2 Sao',
      type: '2',
      isActive: false
    },
    {
      name: '3 Sao',
      type: '3',
      isActive: false
    },
    {
      name: '4 Sao',
      type: '4',
      isActive: false
    },
    {
      name: '5 Sao',
      type: '5',
      isActive: false
    }
  ]

  dataComment = [
    {
      image: 'https://highlandscoffee.com.vn/vnt_upload/news/09_2020/117893497_3384030921677728_5150032367808787141_o.jpg',
      name: 'Nguyễn Văn Huy',
      comment: 'Sản phẩm thật tuyệt vời',
      time: '4',
      point: 4
    },
    {
      image: 'https://highlandscoffee.com.vn/vnt_upload/news/09_2020/117893497_3384030921677728_5150032367808787141_o.jpg',
      name: 'Nguyễn Văn Huy',
      comment: 'Sản phẩm thật tuyệt vời',
      time: '4',
      point: 4
    },
    {
      image: 'https://highlandscoffee.com.vn/vnt_upload/news/09_2020/117893497_3384030921677728_5150032367808787141_o.jpg',
      name: 'Nguyễn Văn Huy',
      comment: 'Sản phẩm thật tuyệt vời Sản phẩm thật tuyệt vời Sản phẩm thật tuyệt vời Sản phẩm thật tuyệt vời Sản phẩm thật tuyệt vời Sản phẩm thật tuyệt vời Sản phẩm thật tuyệt vời Sản phẩm thật tuyệt vời',
      time: '4',
      point: 4
    },
    {
      image: 'https://highlandscoffee.com.vn/vnt_upload/news/09_2020/117893497_3384030921677728_5150032367808787141_o.jpg',
      name: 'Nguyễn Văn Huy',
      comment: 'Sản phẩm thật tuyệt vời',
      time: '4',
      point: 4
    }
  ]

  dataListSize = []
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

  constructor(private router: Router, private detailService: DetailService, private route: ActivatedRoute, private cartService: CartServiceService, private spinner: CSpinnerService, private _snackBar: MatSnackBar, private cartRootService: CartRootService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.spinner.show()
    this.route.queryParams.subscribe(params => {
      const dataGetItem = new HttpRequestModel();
      const name = params.name.replace(/-+/g, ' ');
      dataGetItem.params = { name };
      this.detailService.getListFashion(dataGetItem).subscribe((res) => {
        res.data.map((e) => {
          this.dataListSize.push(e)
          console.log(this.dataListSize)
        })
        this.spinner.hide()
        this.data = res.data[0]
        const dataGetComment = new HttpRequestModel();
        dataGetComment.params = { product_id: this.data.product_id }
        this.detailService.getListComment(dataGetComment).subscribe((res) => {
          console.log(res)
        })
      })
      //
    })


  }
  handleItemClick(item) {
    this.dataStar = this.dataStar.map(menu => {
      menu.isActive = menu === item;
      return menu;
    });
  }
  handleClickSize(size) {
    const index = this.dataListSize.indexOf(size)
    this.data = this.dataListSize[index]

  }
  addToCart() {
    this.cartRootService.isLogin.subscribe((res) => {
      if (res === true) {
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
          this.cartRootService.listCartChange.next(res.cart)
          this.cartRootService.countChange.next(res.count)
          this.spinner.hide()
          this._snackBar.openFromComponent(SnackBarComponent, {
            data: 'Thành công',
            duration: 2000,
            panelClass: ['blue-snackbar'],
            verticalPosition: 'top',
          });

        }, (err) => {
          this._snackBar.openFromComponent(SnackBarComponent, {
            data: 'Thất bại',
            duration: 2000,
            panelClass: ['red-snackbar'],
            verticalPosition: 'top',
          });
        })
      } else {
        this.dialog.open(FormComponent);
      }
    })


  }

}

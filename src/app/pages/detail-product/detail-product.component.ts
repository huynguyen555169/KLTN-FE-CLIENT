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
  rate = 0;
  review = ''
  dataStar = [
    {
      name: 'Tấc cả',
      type: '',
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

  dataComment: any;
  arrayStars = []
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
          this.dataComment = res.data;
        })
      })
      //
      this.cartRootService.rateChange.subscribe((res) => {
        this.rate = res
        for (let i = 0; i < 5; i++) {
          if (this.rate > 1) {
            this.arrayStars.push(100);
          } else if (this.rate > 0) {
            this.arrayStars.push(this.rate * 100);
          } else {
            this.arrayStars.push(0);
          }
          this.rate--;
        }
      })

    })


  }
  handleItemClick(item) {
    this.dataStar = this.dataStar.map(menu => {
      menu.isActive = menu === item;
      return menu;
    });
    const dataGetComment = new HttpRequestModel();
    dataGetComment.params = { product_id: this.data.product_id, number_star: item.type }
    this.detailService.getListComment(dataGetComment).subscribe((res) => {
      this.dataComment = res.data;
    })
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
            data: res.message,
            duration: 2000,
            panelClass: ['blue-snackbar'],
            verticalPosition: 'top',
          });


        }, (err) => {
          console.log(err)
          this.spinner.hide()
          this._snackBar.openFromComponent(SnackBarComponent, {
            data: err.error.message,
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
  sendReview() {

    this.spinner.show()
    const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    const dataPostComment = new HttpRequestModel();
    dataPostComment.body = { product_id: this.data.product_id, value: 4, review: this.review }
    this.detailService.postRating(dataPostComment, httpOptions).subscribe((res) => {
      this.spinner.hide()
      const dataGetComment = new HttpRequestModel();
      dataGetComment.params = { product_id: this.data.product_id }
      this.detailService.getListComment(dataGetComment).subscribe((res) => {
        this.dataComment = res.data;
        this.review = ''
      })

    }, (err) => {
      this.spinner.hide()
    })

  }
  handleRateing(i) {
    this.arrayStars = []
    this.cartRootService.rateChange.next(i + 1)
  }

}

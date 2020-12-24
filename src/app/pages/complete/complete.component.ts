import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/core/services/api/payment/payment.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {
  data;
  dataArr;
  constructor(private route: ActivatedRoute, private cartService: PaymentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((parrams) => {
      const token = JSON.parse(localStorage.getItem('currentUser1')).token.accessToken;
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': token
        })
      };
      const getID = new HttpRequestModel();

      getID.params = { id: parrams.id };
      this.cartService.getIDComplete(getID, httpOptions).subscribe((res) => {
        this.data = res.data[0]
        this.dataArr = res.data[0].order_detail.map((i) => {
          return i
        });

      })
    })
  }

}

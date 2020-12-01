import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { data } from './mockData';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  data = data;
  data1 = {
    minValue: 0,
    maxValue: 10000
  }
  video;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.video = document.getElementById('video');
    this.video.muted = "muted";
  }
  handleFashion() {
    this.router.navigate([`product/${data[0].link}`
    ]);
  }
  handleShoes() {
    this.router.navigate([`product/${data[1].link}`
    ]);
  }
  handleWallets() {
    this.router.navigate([`product/${data[2].link}`
    ]);
  }
  handleBelts() {
    this.router.navigate([`product/${data[3].link}`
    ]);
  }
  handleWatch() {
    this.router.navigate([`product/${data[4].link}`
    ]);
  }
}

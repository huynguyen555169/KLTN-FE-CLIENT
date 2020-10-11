import { Component, OnInit } from '@angular/core';
import { data } from './mockData';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  data = data;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}

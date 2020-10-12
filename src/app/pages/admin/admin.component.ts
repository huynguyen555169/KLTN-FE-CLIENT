import { Component, OnInit } from '@angular/core';
import { data, dataInfo, dataNav, position } from './mockData';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  //datanav
  dataNav = dataNav;
  //dataproduct
  data = data;
  //data user info
  dataInfo = dataInfo;
  position = position;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }
  menuClick(e) {

  }

}

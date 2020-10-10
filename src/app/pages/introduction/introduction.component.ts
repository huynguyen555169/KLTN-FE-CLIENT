import { Component, OnInit } from '@angular/core';
import { data } from './mockData';



@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  data = data;

  constructor() { }

  ngOnInit(): void {
  }

}

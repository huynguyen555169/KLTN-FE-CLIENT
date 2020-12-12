import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.scss']
})
export class CardCommentComponent implements OnInit, OnChanges {
  @Input() data: any
  arrayStars = Array<number>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    let rate = this.data.point || 0;
    for (let i = 0; i < 5; i++) {
      if (rate > 1) {
        this.arrayStars.push(100);
      } else if (rate > 0) {
        this.arrayStars.push(rate * 100);
      } else {
        this.arrayStars.push(0);
      }
      rate--;
    }
  }

}

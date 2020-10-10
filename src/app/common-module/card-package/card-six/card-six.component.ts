import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-card-six',
  templateUrl: './card-six.component.html',
  styleUrls: ['./card-six.component.scss']
})
export class CardSixComponent implements OnInit, OnChanges {
  @Input() cardData: any;
  @Output() actionClick = new EventEmitter<any>();
  arrayStars = [];
  arraySkills = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    let rate = this.cardData.point || 0;
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

    if (this.cardData.skills.length > 2) {
      this.arraySkills = this.cardData.skills.slice(0, 2);
      this.arraySkills.push({ name: `+${this.cardData.skills.length - 2}` });
    }
  }

  cardClick() {
    this.actionClick.emit(this.cardData);
  }
}

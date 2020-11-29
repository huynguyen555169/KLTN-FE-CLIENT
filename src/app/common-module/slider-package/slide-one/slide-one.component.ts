import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ViewChild,
  ElementRef,
  OnChanges,
  AfterViewChecked,
  Output,
  EventEmitter
} from '@angular/core';
import { SlideOneItemModel } from './components/slide-one-item/slide-one-item.component';
declare var $: any;

@Component({
  selector: 'app-slide-one',
  templateUrl: './slide-one.component.html',
  styleUrls: ['./slide-one.component.scss']
})
export class SlideOneComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() dataList: SlideOneItemModel[];
  @Input() showControllDots = true;
  @Input() showControllArrows = false;
  @Input() slideId: string;
  @Output() actionItemClick = new EventEmitter<SlideOneItemModel>();
  @ViewChild('slideTrack', { static: true }) slideTrack: ElementRef;
  constructor() { }
  elementWidth: number;
  elementHeight: number;
  elementGutter: number;
  isInitSlide = false;

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.dataList &&
      changes.dataList.currentValue &&
      changes.dataList.currentValue !== changes.dataList.previousValue
    ) {
      this.isInitSlide = true;
    }
  }

  ngAfterViewChecked() {
    if (this.isInitSlide) {
      $(`#${this.slideId}`).slick({
        dots: this.showControllDots,
        infinite: true,
        arrows: this.showControllArrows,
        slidesToShow: 1,
        focusOnSelect: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        swipeToSlide: true,
        prevArrow: `<button type="button" class="previous-arrow custom-arrow">
        <span class="material-icons">
          arrow_back
        </span>
      </button>`,
        nextArrow: `<button type="button" class="next-arrow custom-arrow">
        <span class="material-icons">
        arrow_forward
        </span>
      </button>`
      });
      this.isInitSlide = false;
    }
  }
}

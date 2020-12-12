import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ViewChild,
  OnChanges,
  AfterViewChecked,
  ElementRef
} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slide-six',
  templateUrl: './slide-six.component.html',
  styleUrls: ['./slide-six.component.scss']
})
export class SlideSixComponent implements OnInit, OnChanges, AfterViewChecked {

  @Input() dataList: any;
  @Input() showControllDots = false;
  @Input() showControllArrows = true;
  @Input() elementWidthPercent = 100; // in percents
  @Input() gutter = 10;
  @Input() slideId: string;
  @ViewChild('slideTrack', { static: true }) slideTrack: ElementRef;
  constructor() { }
  elementWidth: number;
  elementHeight: number;
  elementGutter: number;
  isInitSlide = false;

  ngOnInit(): void {
    this.elementWidth = Math.floor(
      ((this.slideTrack.nativeElement.offsetWidth - 1) *
        this.elementWidthPercent) /
      100
    );
    this.elementGutter = this.elementWidth / 40 + this.gutter;
    this.elementHeight = this.slideTrack.nativeElement.offsetHeight;
  }

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
      this.isInitSlide = false;
      $(`#${this.slideId}`).slick('unslick');
      $(`#${this.slideId}`).not('.slick-initialized').slick({
        dots: this.showControllDots,
        infinite: true,
        arrows: this.showControllArrows,
        centerMode: true,
        focusOnSelect: true,
        initialSlide: 0,
        swipeToSlide: true,
        asNavFor: '#slider-nav',
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
      $('#slider-nav').slick('unslick');
      $('#slider-nav').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: `#${this.slideId}`,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
      });
    }

  }
}

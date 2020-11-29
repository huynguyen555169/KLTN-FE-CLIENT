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
  EventEmitter,
  AfterViewInit
} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slide-five',
  templateUrl: './slide-five.component.html',
  styleUrls: ['./slide-five.component.scss']
})
export class SlideFiveComponent implements OnInit, OnChanges, AfterViewChecked, AfterViewInit {

  @Input() dataList: any[];
  @Input() showControllDots = false;
  @Input() showControllArrows = true;
  @Input() gutter = 20;
  @Input() elementWidthPercent = 25; // in percents
  @Input() slideId: string;
  @Output() actionItemClick = new EventEmitter<any>();
  @Output() actionHeartClick = new EventEmitter<any>();
  @ViewChild("slideTrack", { static: true }) slideTrack: ElementRef;
  @ViewChild("leftArrow") leftArrow: ElementRef;
  @ViewChild("rightArrow") rightArrow: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
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
      $(`#${this.slideId}`).slick({
        dots: this.showControllDots,
        infinite: true,
        arrows: this.showControllArrows,
        initialSlide: 0,
        swipeToSlide: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,

      });
      $('#slide-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: `#${this.slideId}`
      });
      this.isInitSlide = false;
    }
  }


}

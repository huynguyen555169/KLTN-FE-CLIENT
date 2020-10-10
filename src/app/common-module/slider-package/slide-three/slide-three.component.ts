import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  AfterViewChecked,
  Output,
  EventEmitter
} from '@angular/core';
import { SlideThreeItemModel } from './components/slide-three-item/slide-three-item.component';
declare var $: any;
@Component({
  selector: 'app-slide-three',
  templateUrl: './slide-three.component.html',
  styleUrls: ['./slide-three.component.scss']
})
export class SlideThreeComponent
  implements OnInit, OnChanges, AfterViewChecked {
  @Input() dataList: SlideThreeItemModel[];
  @Input() showControllDots = false;
  @Input() showControllArrows = false;
  @Input() elementWidthPercent = 65; // in percents
  @Input() gutter = 10;
  @Input() slideId: string;
  @Output() actionItemClick = new EventEmitter<SlideThreeItemModel>();
  @ViewChild('slideTrack', { static: true }) slideTrack: ElementRef;
  @ViewChild('leftArrow') leftArrow: ElementRef;
  @ViewChild('rightArrow') rightArrow: ElementRef;
  constructor() {}
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
      $(`#${this.slideId}`).slick({
        dots: this.showControllDots,
        infinite: true,
        arrows: this.showControllArrows,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        initialSlide: this.dataList.length > 1 ? 1 : 0,
        swipeToSlide: true
      });
      this.isInitSlide = false;
    }
  }
}

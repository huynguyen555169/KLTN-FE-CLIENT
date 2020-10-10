import {
  Component,
  OnInit,
  OnChanges,
  AfterViewChecked,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  SimpleChanges,
  AfterViewInit,
} from "@angular/core";
declare var $: any;

@Component({
  selector: "app-slide-four",
  templateUrl: "./slide-four.component.html",
  styleUrls: ["./slide-four.component.scss"],
})
export class SlideFourComponent
  implements OnInit, OnChanges, AfterViewChecked, AfterViewInit {
  @Input() dataList: any[];
  @Input() showControllDots = false;
  @Input() showControllArrows = true;
  @Input() gutter = 20;
  @Input() elementWidthPercent = 25; // in percents
  @Input() slideId: string;
  @Output() actionItemClick = new EventEmitter<any>();
  @ViewChild("slideTrack", { static: true }) slideTrack: ElementRef;
  @ViewChild("leftArrow") leftArrow: ElementRef;
  @ViewChild("rightArrow") rightArrow: ElementRef;
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
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: `<button type="button" class="previous-arrow custom-arrow">
        <span class="material-icons">
          arrow_back
        </span>
      </button>`,
        nextArrow: `<button type="button" class="next-arrow custom-arrow">
        <span class="material-icons">
        arrow_forward
        </span>
      </button>`,
      });
      this.isInitSlide = false;
    }
  }

  ngAfterViewInit() {
    // if (this.isInitSlide) {
    //   $(`#${this.slideId}`).slick({
    //     dots: this.showControllDots,
    //     infinite: true,
    //     arrows: this.showControllArrows,
    //     initialSlide: 0,
    //     swipeToSlide: true,
    //     variableWidth: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     prevArrow: `<button type="button" class="previous-arrow custom-arrow">
    //     <span class="material-icons">
    //       arrow_back
    //     </span>
    //   </button>`,
    //     nextArrow: `<button type="button" class="next-arrow custom-arrow">
    //     <span class="material-icons">
    //     arrow_forward
    //     </span>
    //   </button>`,
    //   });
    //   this.isInitSlide = false;
    // }
  }
}

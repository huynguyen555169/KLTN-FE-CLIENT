import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalPage: number;
  @Input() currentPage: number;
  @Output() pageChange = new EventEmitter<number>();

  constructor() { }

  // From current - 2 -> current + 2
  pageShowArray: Array<number> = [];

  // State button: disable previoust/next button
  isDisablePrevious = true;
  isDisableNext = true;

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      this.totalPage &&
      this.currentPage &&
      (changes.totalPage.currentValue !== changes.totalPage.previousValue ||
        changes.currentPate.currentValue !== changes.currentPage.previousValue)
    ) {
      // All input valid or input change
      this.updateShowArray();
    }
  }

  updateShowArray(): void {
    this.pageShowArray.length = 0;
    const startPage = Math.min(
      +this.totalPage,
      Math.max(1, this.currentPage - 2)
    );
    this.pageShowArray = Array.from({ length: this.totalPage }, (_, i) => i + startPage);
    this.updateStateButton();
  }

  updateStateButton(): void {
    this.isDisablePrevious = +this.currentPage === 1;
    this.isDisableNext = +this.currentPage === +this.totalPage;
  }

  nextPage(page: number): void {
    if (page >= 1 && page <= this.totalPage) {
      this.currentPage = page;
      this.updateShowArray();
      this.pageChange.emit(this.currentPage);
    }
  }
}

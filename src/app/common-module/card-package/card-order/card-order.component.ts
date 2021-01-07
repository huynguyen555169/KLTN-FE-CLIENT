import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss']
})
export class CardOrderComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() arrStatus: any;
  @Input() arrId: any;
  @Output() cancel = new EventEmitter<any>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }
  handleCancel() {

    this.cancel.emit(this.arrId)
  }

}

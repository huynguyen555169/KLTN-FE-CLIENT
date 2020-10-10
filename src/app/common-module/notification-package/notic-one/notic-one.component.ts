import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-notic-one',
  templateUrl: './notic-one.component.html',
  styleUrls: ['./notic-one.component.scss'],
})
export class NoticOneComponent implements OnInit {
  @Input() notificationList: NotificationItemModel[];
  @Input() iconColor: string;
  @Input() pageNoti: string;
  @Output() itemClick = new EventEmitter<NotificationItemModel>();

  @ViewChild('notifyItemMenuTrigger', { static: false })
  itemActionMenu: MatMenuTrigger;

  constructor() {}

  currentItem: NotificationItemModel;

  ngOnInit(): void {}

  handleItemClick(item: NotificationItemModel) {
    const indexInList = this.notificationList.findIndex(
      (notification) => item.id === notification.id
    );
    if (indexInList !== -1) {
      if (!this.notificationList[indexInList].mark) {
        this.notificationList[indexInList].mark = true;
      }
    }
    this.itemClick.emit(item);
  }

  getNotificationCount() {
    return this.notificationList.filter((item) => !item.mark).length;
  }

  menuItemActionClick(event: any, item: NotificationItemModel) {
    event.stopPropagation();
    this.currentItem = item;
  }
  // đánh dấu tấc cả là đã đọc
  handleAllReaded() {
    this.notificationList.map((item) => {
      if (item.mark === false) {
        item.mark = !item.mark;
      }
    });
  }
}

export class NotificationItemModel {
  id: string;
  content: string;
  mark: boolean;
  owner: string;

  constructor(data: any) {
    this.content = data.content;
    this.mark = data.mark;
    this.owner = data.owner;
    this.id = data.id;
  }
}

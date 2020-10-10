# Notic.01 Notification

# Selector:

app-notic-one

# Input:

    // list notitifycation to show
    notificationList: NotificationItemModel[] =
    [{
      id: string; // notification id
      avatar: string; // avatar của notification
      content: string; // nội dung notification
      mark: boolean; // Đánh dấu đã xem chưa
      owner: string; // Người gửi
      time: string; // số giờ của thông báo được gửi
    }]

    iconColor: string (default = "white") // color của icon bell
    pageNoti: string // đây là  url page chứa tất cả các thông báo

# Output:

itemClick: NotificationItemModel // Click vào item

# Module:

{ MatButtonModule } from '@angular/material/button';  
{ MatIconModule } from '@angular/material/icon';
{ MatMenuModule } from '@angular/material/menu';
{ MatBadgeModule } from '@angular/material/badge';

# Example:

    <app-notic-one
    [notificationList]="notificationList"
    [iconColor]="iconColor"
    [pageNoti]="pageNoti"
    (itemClick)="handleItemClick($event)"
    ></app-notic-one>

# Card.02 Card chi tiết dọc

# Selector:

app-card-two

# Input:

    data: { // data to show in card
      imageUrl: 'string', // Link image của card
      title: 'string', // Title của card
      master: 'string', // Tên giảng viên
      description: 'string', // Thông tin chi tiết trong card
      sessions: number, // Số buổi
      price: 'string', // Giá lớp học
      countStudent: number, // Số học sinh
      rate: number // Xếp hạng lớp học
    }

actions: boolean // show/hide button More  
imageBefore: boolean // show image before/after

# Output:

actionClick: void // button More click event

# Module:

{ MatButtonModule } from '@angular/material/button';  
{ MatIconModule } from '@angular/material/icon';

# Example:

<app-card-two [data]="data" [actions]="isShowAction" [imageBefore]="isImageBefore" (actionClick)="handleActionClick()"></app-card-two>

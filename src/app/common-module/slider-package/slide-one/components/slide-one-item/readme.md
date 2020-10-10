# Slide-One-Item Module use in slide01

# Selector:

    app-slide-one-item

# Input:

    data: SlideOneItemModel = {
      img: string; // Background image
      title: string; // Tiêu đề item
      subTitle: string; // Tiêu đề phụ (tên giảng viên)
      rating: number; // Số rating
      totalRating: number; // Tổng lượt đánh giá
      contents: string[]; // Mảng thông tin bổ sung của lớp học
      description: string; // Mô tả lớp học
      chips: string[]; // Mảng các chip
      price: number; // Giá hiện tại
      oldPrice: number; // Giá cũ
    }

# Output:

    actionClick: SlideOneItemModel // trả về thông tin item khi click vào button

# Module:

{ MatIconModule } from '@angular/material/icon';
{ NumberPipeModule } from '@app/core/services/pipes/number-pipe/number-pipe.module';
{ StringPipeModule } from '@app/core/services/pipes/string-pipe/string-pipe.module';

# Example:

    <app-slide-one-item
      [data]="data"
      (actionClick)="handleActionClick($event)"
    ></app-slide-one-item>

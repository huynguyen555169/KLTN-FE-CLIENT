# Slide-Three-Item Module use in slide03

# Selector:

    <app-slide-three-item></app-slide-three-item>

# Input:

    data: SlideThreeItemModel = {
        img: string; // background image của item
        title: string; // Tiêu đề item
        subTitle: string; // Subtitle của item
        rating: number; // Số rating
        totalRating: number; // Tổng số lượng rating
        description: string; // Đoạn mô tả
        chips: string[]; // Các chips
      }

# Output:

    actionClick: SlideThreeItemModel // trả về thông tin item khi click vào button

# Module:

{ MatIconModule } from '@angular/material/icon';

# Example:

    <app-slide-three-item
      [data]="data"
      (actionClick)="handleActionClick($event)"
    ></app-slide-three-item>

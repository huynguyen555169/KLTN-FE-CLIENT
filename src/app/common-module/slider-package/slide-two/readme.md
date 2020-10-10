# Slide.02

# Selector:

app-slide-two

# Input:

    // Data slide
    dataList: SlideTwoItemModel [{ // Array data item will show in slide
      img: string, // image of slide item
      star: number, // rating of slide item
      description: string, // description of slide item
      title: string, // title of slide item
      subtitle: string // subtitle of slide item
    }]

    showControllDots: boolean (default = false) // true: Hiển thị các chấm để chọn trang trong slide, false: ẩn hiển thị
    showControllArrows: boolean (default = true) // true: Hiển thị button arrow next/previous slide, false: ẩn hiển thị
    elementWidthPercent: number (default = 100) // Độ rộng (%) của item trong slide
    gutter: number (default = 10) // Khoảng cách các item (px)
    slideId: string (required) // Id định danh cho slide

# Output:

N/A

# Module:

{ MatIconModule } from '@angular/material/icon';

# Example:

    <app-slide-three
      [dataList]="slideData"
      [showControllDots]="showControllDots"
      [showControllArrows]="showControllArrows"
      [elementWidthPercent]="elementWidthPercent"
      [gutter]="gutter"
      [slideId]="'string-slide-id'"
      (actionItemClick)="handle($event)"
    ></app-slide-three>

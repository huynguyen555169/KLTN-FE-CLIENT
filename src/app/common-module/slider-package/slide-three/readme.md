# Slide.03

# Required

- Install library slick-carousel (lastest version)

```sh
npm i slick-carousel
```

- Install library jquery (version >= 1.7)

```sh
npm i jquery
```

- Import css, theme css, js file của slick-carousel và jquery vào angular.json file
- Style path: angular.json/projects/common-structure/architect/build/styles
- Scripts path: angular.json/projects/common-structure/architect/build/scripts

```sh
"styles": [
  ...,
  "node_modules/slick-carousel/slick/slick.scss",
  "node_modules/slick-carousel/slick/slick-theme.scss",
  ...
],
"scripts": [
  ...,
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/slick-carousel/slick/slick.min.js",
  ...
]
```

- Containt SlideThreeItemModule

# Selector:

    app-slide-three

# Input:

    dataList: SlideThreeItemModel[] =[{ // Mảng thông tin cho các slide item
        img: string; // background image của item
        title: string; // Tiêu đề item
        subTitle: string; // Subtitle của item
        rating: number; // Số rating
        totalRating: number; // Tổng số lượng rating
        description: string; // Đoạn mô tả
        chips: string[]; // Các chips
      }]

    showControllDots: boolean (default = false) // true: Hiển thị các chấm để chọn trang trong slide, false: ẩn hiển thị
    showControllArrows: boolean (default = false) // true: Hiển thị button arrow next/previous slide, false: ẩn hiển thị
    elementWidthPercent: number (default = 65) // Độ rộng (%) của item trong slide
    gutter: number (default = 10) // Khoảng cách các item (px)
    slideId: string (required) // Id định danh cho slide

# Output:

    actionItemClick: SlideThreeItemModel // Slide item action click event

# Module:

N/A

# Note

```sh
min-height container layout recommended: 450px
```

# Example:

    <app-slide-three
      [dataList]="slideData"
      [showControllDots]="showControllDots"
      [showControllArrows]="showControllArrows"
      [elementWidthPercent]="elementWidthPercent"
      [gutter]="gutter"
      (actionItemClick)="handle($event)"
    ></app-slide-three>

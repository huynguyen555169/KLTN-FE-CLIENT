# Slide.01

# Required

- Add StringPipeModule and NumberPipeModule to project for SlideOneItemModule (Read readme.md of SlideOneItemModule)

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

- Include: SlideOneItemModule

# Selector:

    app-slide-one

# Input:

    dataList: SlideOneItemModel[] = [{
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
    }]

    showControllDots: boolean (default = true) // true: Hiển thị các chấm để chọn trang trong slide, false: ẩn hiển thị
    showControllArrows: boolean (default = false) // true: Hiển thị button arrow next/previous slide, false: ẩn hiển thị
    slideId: string (required) // Id định danh cho slide

# Output:

    actionItemClick: SlideOneItemModel // Slide item action click event

# Module:

N/A

# Note

```sh
min-height container layout recommended: 700px
```

# Example:

    <app-slide-one
      [dataList]="dataList"
      [slideId]="'string-id'"
      (actionItemClick)="handle($event)"
    ></app-slide-one>

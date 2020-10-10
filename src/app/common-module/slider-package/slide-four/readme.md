# Slide.04 Slide card

# Required

- Required all CardOneModule requried

- CardOneModule in project, update import path in module

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

# Selector:

    app-slide-four

# Input:

    dataList: CardOneModel[] = [{ // data will show in card
      img: string, // background of card
      discount: string, // percent of discount
      title: string, // title of card
      chips: ["Chips", "Chips", "Chips", "+8"], // tối đa 3 chips sẽ hiện, chip thứ 4 sẽ là +N (N: số còn lại)
      subTitle: string, // subTitle of card
      star: number, // number of stars in card
      total: number, // amount of reviewer for card (star)
      description: string // description of card
      subContent: string, // price of currently
      subReContent: string, // price before discount
      more: string, // name of action
    }]

    showControllDots: boolean (default = false) // true: Hiển thị các chấm để chọn trang trong slide, false: ẩn hiển thị
    showControllArrows: boolean (default = true) // true: Hiển thị button arrow next/previous slide, false: ẩn hiển thị
    gutter: number (optional, default = 20) // Khoảng cách giữa các item;
    elementWidthPercent: number (optional, default = 25) // kích thước 1 item (in percents, 25 => 4 item)
    slideId: string (required) // Id định danh cho slide

# Output:

    actionItemClick: SlideOneItemModel // Slide item action click event

# Module:

N/A

# Note

```sh
min-height container layout recommended: 500px
```

# Example:

    <app-slide-four
      [dataList]="dataList"
      [slideId]="'slide-id-string'"
      [showControllDots]="showControllDots"
      [showControllArrows]="showControllArrows"
      [gutter]="gutter"
      [elementWidthPercent]"dataList"
      (actionItemClick)="handle($event)"
    ></app-slide-four>

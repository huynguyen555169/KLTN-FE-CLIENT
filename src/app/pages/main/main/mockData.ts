
import { MenuTwoDataModel } from "src/app/common-module/menu-package/menu-two/menu-two.component";
import { LanguageOneModel } from "src/app/common-module/language-package/lang-one/lang-one.component";
import { SlideOneItemModel } from "src/app/common-module/slider-package/slide-one/components/slide-one-item/slide-one-item.component";
import { LabelOneModel } from "src/app/common-module/label-package/label-one/label-one.component";
import { SlideTwoItemModel } from "src/app/common-module/slider-package/slide-two/components/slide-two-item/slide-two-item.component";
import { FooterOneModel } from "src/app/common-module/footer-package/footer-one/footer-one.component";
import { CardTenModel } from "src/app/common-module/card-package/card-ten/card-ten.component";
import { CardOneModel } from 'src/app/common-module/card-package/card-one/card-one.component';



// slider  01
export const dataListSlide1_1 = {
  list_popular_course: [
    {
      course_title: "Combo quần áo",
      instructor_name: "Việt Nam",
      avg_rating: 5,
      count_rating: 1900,
      time: "",
      lesson: '',
      count_enrolled: '',
      course_tag: ["Áo", "Quần", "Thắt lưng", "Giày"],
      description: "Sản phẩm dành cho nam giới",
      price_course: 1900000,
      discount_price: 2500000,
      image:
        "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      course_title: "Combo quần áo",
      instructor_name: "Việt Nam",
      avg_rating: 5,
      count_rating: 1900,
      time: "",
      lesson: '',
      count_enrolled: '',
      course_tag: ["Áo", "Quần", "Thắt lưng", "Giày"],
      description: "Sản phẩm dành cho nam giới",
      price_course: 1900000,
      discount_price: 2500000,
      image:
        "https://images.unsplash.com/photo-1542838077-7fb322b21b80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      course_title: "Combo quần áo",
      instructor_name: "Việt Nam",
      avg_rating: 5,
      count_rating: 1900,
      time: "",
      lesson: '',
      count_enrolled: '',
      course_tag: ["Áo", "Quần", "Thắt lưng", "Giày"],
      description: "Sản phẩm dành cho nam giới",
      price_course: 1900000,
      discount_price: 2500000,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ]

};

export const dataLabel = {
  count_course: 4845,
  count_user: 1215,
  count_intructor: 5124,
};
//

//card02
export const dataCard02 = {
  list_best_course: [
    {
      // data to show in card
      course_title: "Combo quần áo nam lĩnh lãm",
      instructor_name: "Made in VietNam",
      lesson: 3,
      count_enrolled: 4,
      avg_rating: 4.5,
      count_rating: 120,
      course_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      price_course: 1000000,
      image:
        "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      // data to show in card
      course_title: "Combo quần áo nam lĩnh lãm",
      instructor_name: "Made in VietNam",
      lesson: 3,
      count_enrolled: 4,
      avg_rating: 4.5,
      count_rating: 120,
      course_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      price_course: 1000000,
      image:
        "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    }, {
      // data to show in card
      course_title: "Combo quần áo nam lĩnh lãm",
      instructor_name: "Made in VietNam",
      lesson: 3,
      count_enrolled: 4,
      avg_rating: 4.5,
      count_rating: 120,
      course_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      price_course: 1000000,
      image:
        "https://images.unsplash.com/photo-1499971856191-1a420a42b498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ]
};
// card 10

export const card10Data: CardTenModel[] = [
  {
    // data will show in card
    img: "../../../assets/images/Group 24.svg", // avatar of card
    title: "Free ship", // title of card
    description:
      "Điều kiện và điều khoản trên có thể thay đổi tùy thuộc vào các chương trình khuyến mãi tại từng thời điểm khác nhau Bạn có thể xem chi tiết ưu đãi miễn phí vận chuyển tại mục Tôi > Ví Voucher > bấm xem Điều kiện của từng mã miễn phí vận chuyển", // description of card
    position: "left",
  },
  {
    // data will show in card
    img: "../../../assets/images/Group 24.svg", // avatar of card
    title: "Giá rẻ", // title of card
    description:
      "Điều kiện và điều khoản trên có thể thay đổi tùy thuộc vào các chương trình khuyến mãi tại từng thời điểm khác nhau Bạn có thể xem chi tiết ưu đãi miễn phí vận chuyển tại mục Tôi > Ví Voucher > bấm xem Điều kiện của từng mã miễn phí vận chuyển", // description of card
    position: "bottom",
  },
  {
    // data will show in card
    img: "../../../assets/images/Group 24.svg", // avatar of card
    title: "Bảo hành", // title of card
    description:
      "Điều kiện và điều khoản trên có thể thay đổi tùy thuộc vào các chương trình khuyến mãi tại từng thời điểm khác nhau Bạn có thể xem chi tiết ưu đãi miễn phí vận chuyển tại mục Tôi > Ví Voucher > bấm xem Điều kiện của từng mã miễn phí vận chuyển", // description of card
    position: "right",
  },
];
export const direaction = {
  left: "left",
  right: "right",
  bottom: "bottom",
}; // định nghĩa hướng của animation, nhận 1 trong 3 giá trị: left, right, bottom
// slide03

export const slider03Data = {
  list_best_intructor: [
    {
      instructor_name: "Belts",
      workplace: "Bán tấc cả các loại sản phẩm về Belts",
      tags: ["Thắt lưng"],
      introduce: "Tấc cả sản phẩm được xuất xứ rõ ràng",
      avg_rating: 3,
      count_rating: 10,
      price: 12012,
      percentage: 20,
      price_discount: 10000,
      avatar:
        "../../../../assets/images/wallets.jpeg",
    },
    {
      instructor_name: "Fashion",
      workplace: "Bán tấc cả các loại sản phẩm về fashion",
      tags: ["Quần", "Áo", "Khác"],
      introduce: "Tấc cả sản phẩm được xuất xứ rõ ràng",
      avg_rating: 3,
      count_rating: 10,
      price: 12012,
      percentage: 20,
      price_discount: 10000,
      avatar:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80",
    },
    {
      instructor_name: "Shoes",
      workplace: "Bán tấc cả các loại Giày",
      tags: ["Giày"],
      introduce: "Tấc cả sản phẩm được xuất xứ rõ ràng",
      avg_rating: 3,
      count_rating: 10,
      price: 12012,
      percentage: 20,
      price_discount: 10000,
      avatar:
        "../../../../assets/images/shoes.jpeg",
    },
    {
      instructor_name: "Watch",
      workplace: "Bán tấc cả các loại sản phẩm về fashion",
      tags: ["Đồng hồ"],
      introduce: "Tấc cả sản phẩm được xuất xứ rõ ràng",
      avg_rating: 3,
      count_rating: 10,
      price: 12012,
      percentage: 20,
      price_discount: 10000,
      avatar:
        "../../../../assets/images/watch.jpeg",
    },
    {
      instructor_name: "Wallets",
      workplace: "Bán tấc cả các loại sản phẩm về fashion",
      tags: ["Ví"],
      introduce: "Tấc cả sản phẩm được xuất xứ rõ ràng",
      avg_rating: 3,
      count_rating: 10,
      price: 12012,
      percentage: 20,
      price_discount: 10000,
      avatar:
        "https://images.unsplash.com/photo-1531190260877-c8d11eb5afaf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    },
  ]

};
//slide02

export const slider02Data: SlideTwoItemModel[] = [
  {
    // Array data item will show in slide
    img:
      "https://images.pexels.com/photos/2108769/pexels-photo-2108769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // image of slide item
    star: 3, // rating of slide item
    description:
      "Sản phẩm rất chất lượng, giao hàng lại nhanh", // description of slide item
    title: "Chất lượng sản phẩm", // title of slide item
    subtitle: "Nguyễn Văn Huy", // subtitle of slide item
  },
  {
    // Array data item will show in slide
    img:
      "https://images.pexels.com/photos/2108769/pexels-photo-2108769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // image of slide item
    star: 3, // rating of slide item
    description:
      "Sản phẩm rất chất lượng, giao hàng lại nhanh", // description of slide item
    title: "Chất lượng sản phẩm", // title of slide item
    subtitle: "Nguyễn Văn Huy", // subtitle of slide item
  },
  {
    // Array data item will show in slide
    img:
      "https://images.pexels.com/photos/2108769/pexels-photo-2108769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // image of slide item
    star: 3, // rating of slide item
    description:
      "Sản phẩm rất chất lượng, giao hàng lại nhanh", // description of slide item
    title: "Chất lượng sản phẩm", // title of slide item
    subtitle: "Nguyễn Văn Huy", // subtitle of slide item
  },
];
// footer01


// service
export const serviceData: any = [
  {
    category: "TOEIC",
    response: [
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
  },
  {
    category: "TOEIC",
    response: [
      {
        title: "Đây là title 2",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
  },
  {
    category: "TOEIC",
    response: [
      {
        title: "Đây là title 4",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Đây là title",
        subTitle: "đây là subtitle",
        tag: ["1", "2", "3"],
        description: "anh yêu em",
        avgRating: 3,
        countRating: 120,
        price: 120000,
        percentage: 20,
        priceDiscount: 140000,
        image:
          "https://images.pexels.com/photos/3853623/pexels-photo-3853623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
  },
];

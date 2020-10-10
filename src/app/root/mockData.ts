import { MenuItemModel } from '../common-module/menu-package/menu-one/menu-one.component';
import { LanguageOneModel } from '../common-module/language-package/lang-one/lang-one.component';
import { MenuTwoDataModel } from '../common-module/menu-package/menu-two/menu-two.component';
import { FooterOneModel } from '../common-module/footer-package/footer-one/footer-one.component';

export const logo = "../../../assets/images/huy1.png";
export const menus: MenuItemModel[] = [
    {
        name: "TRANG CHỦ", // Tên hiển thị trên layout
        isActive: false, // link được active
        link: "", // Đường dẫn tương ứng của item
    },
    {
        name: "GIỚI THIỆU", // Tên hiển thị trên layout
        isActive: false, // link được active
        link: "/about", // Đường dẫn tương ứng của item
    },
    {
        name: "SẢN PHẨM", // Tên hiển thị trên layout
        isActive: false, // link được active
        link: "/product", // Đường dẫn tương ứng của item
    },
    {
        name: "THANH TOÁN", // Tên hiển thị trên layout
        isActive: false, // link được active
        link: "/pay", // Đường dẫn tương ứng của item
    },
    {
        name: "BÀI VIẾT", // Tên hiển thị trên layout
        isActive: false, // link được active
        link: "/blog", // Đường dẫn tương ứng của item
    },
];
//
export const notificationList = [
    {
        id: "1", // notification id
        avatar:
            "https://images.pexels.com/photos/4522973/pexels-photo-4522973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // avatar của notification
        content: "ĐỔI MÔN HỌC", // nội dung notification
        mark: true, // Đáh dấu đã xem chưa
        owner: "Nguyễn Văn Huy", // Người gửi
        time: "2h", // số giờ của thông báo được gửi
    },
    {
        id: "2", // notification id
        avatar:
            "https://images.pexels.com/photos/5108638/pexels-photo-5108638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // avatar của notification
        content: "HỌC MÔN ĐỔI", // nội dung notification
        mark: false, // Đáh dấu đã xem chưa
        owner: "Nguyễn Văn Huy", // Người gửi
        time: "2h", // số giờ của thông báo được gửi
    },
    {
        id: "3", // notification id
        avatar:
            "https://images.pexels.com/photos/5108638/pexels-photo-5108638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // avatar của notification
        content: "Học môn đổi", // nội dung notification
        mark: false, // Đáh dấu đã xem chưa
        owner: "Nguyễn Văn Huy", // Người gửi
        time: "2h", // số giờ của thông báo được gửi
    },
    {
        id: "4", // notification id
        avatar:
            "https://images.pexels.com/photos/5108638/pexels-photo-5108638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // avatar của notification
        content: "Học môn đổi", // nội dung notification
        mark: true, // Đáh dấu đã xem chưa
        owner: "Nguyễn Văn Huy", // Người gửi
        time: "2h", // số giờ của thông báo được gửi
    },
    {
        id: "5", // notification id
        avatar:
            "https://images.pexels.com/photos/5108638/pexels-photo-5108638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // avatar của notification
        content: "Học môn đổi", // nội dung notification
        mark: true, // Đáh dấu đã xem chưa
        owner: "Nguyễn Văn Huy", // Người gửi
        time: "2h", // số giờ của thông báo được gửi
    },
    {
        id: "6", // notification id
        avatar:
            "https://images.pexels.com/photos/5108638/pexels-photo-5108638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // avatar của notification
        content: "Học môn đổi", // nội dung notification
        mark: true, // Đáh dấu đã xem chưa
        owner: "Nguyễn Văn Huy", // Người gửi
        time: "2h", // số giờ của thông báo được gửi
    },
];

export const iconColor = "white"; // color của icon bell
export const pageNoti = ""; // đây là  url page chứa tất cả các thông báo
//
export const data: MenuTwoDataModel = {
    menuItems: [
        {
            // Các option trong menu của user
            icon: "info", // class of material icon,
            name: "Thông tin cá nhân", // Tên option
        },
        {
            // Các option trong menu của user
            icon: "school", // class of material icon,
            name: "Khóa học", // Tên option
        },
        {
            // Các option trong menu của user
            icon: "sync_alt", // class of material icon,
            name: "Đăng xuất", // Tên option
        },
    ],
    userInfo: {
        avatar:
            "https://images.pexels.com/photos/4838598/pexels-photo-4838598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Image url,
        fullName: "Nguyên Hoàng Minh",
        email: "minhminh@gmail.com",
    },
};
export const position = "after"; // position of menu dropdown is value of: above, below, before, after
//

export const footerData: FooterOneModel = {
    title: "Men's Clothing", // title of Footer
    content: [
        {
            // data of some columns
            icon: "../../../assets/images/about1.svg", // img of column
            title: "ABOUT US", // title of colum
            description:
                "It also has a built-in backing track player that pulls in videos from YouTube, which are categorized into musical genres, key and scale. When a user choose a backing track, it shows a draggable and resizable thumbnail of the video, and it sets the fretboard in the right key and scale. This gives the user the ability to learn chords, scales, 3 notes per string (3nps) and CAGED fingering patterns for lead guitar playing.", // description of column
            more: "SEE MORE", // link to website (or page)
        },
        {
            // data of some columns
            icon: "../../../assets/images/services.svg", // img of column
            title: "SERVICES", // title of colum
            description:
                "It also has a built-in backing track player that pulls in videos from YouTube, which are categorized into musical genres, key and scale. When a user choose a backing track, it shows a draggable and resizable thumbnail of the video, and it sets the fretboard in the right key and scale. This gives the user the ability to learn chords, scales, 3 notes per string (3nps) and CAGED fingering patterns for lead guitar playing.", // description of column
            more: "SEE MORE", // link to website (or page)
        },
        {
            // data of some columns
            icon: "../../../assets/images/request.svg", // img of column
            title: "REQUEST", // title of colum
            description: "SADASDSADSADSADASDAS", // description of column
            more: "SEE MORE", // link to website (or page)
        },
    ],
    phone: [
        {
            // phone of website
            icon: "../../../assets/images/phone.svg", // img of phone
            number: "0982240061", // number of phone
        },
    ],
    titleSocial: "Follow us on social", // title of Socials
    social: [
        {
            // list social of socials
            icon: "../../../assets/images/facebook.svg", // img of social
            link: "", // link to social types
        },
        {
            // list social of socials
            icon: "../../../assets/images/facebook.svg", // img of social
            link: "", // link to social types
        },
        {
            // list social of socials
            icon: "../../../assets/images/facebook.svg", // img of social
            link: "", // link to social types
        },
        {
            // list social of socials
            icon: "../../../assets/images/facebook.svg", // img of social
            link: "", // link to social types
        },
    ],
    copyright: "©Copyright CMC 2020", // copyright of footer
    moreInfo: "Điều kiện | Điều khoản", // more info of footer
};
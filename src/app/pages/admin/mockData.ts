import { MenuTwoDataModel } from 'src/app/common-module/menu-package/menu-two/menu-two.component';
import { ProductModel } from 'src/app/common-module/table-package/table-one/table-one.component';

export const data: ProductModel[] = [
    {
        product_id: 1,
        product_name: 'Áo thun cao cấp',
        product_image1: 'https://product.hstatic.net/1000088324/product/2.2_498a7a236ff44c8593c9520621be978a_master.jpg',
        product_image2: 'string',
        product_type_fk: 1,
        product_size_fk: 1,
        product_unit_price: 1000000,
        product_paid_price: 1,
        product_discount: 1,
        product_desciption: 'string',
        product_qty: 50
    },
    {
        product_id: 2,
        product_name: 'Quần tây co giãn',
        product_image1: 'https://product.hstatic.net/1000088324/product/2.2_498a7a236ff44c8593c9520621be978a_master.jpg',
        product_image2: 'string',
        product_type_fk: 1,
        product_size_fk: 1,
        product_unit_price: 2000000,
        product_paid_price: 1,
        product_discount: 1,
        product_desciption: 'string',
        product_qty: 50
    },
    {
        product_id: 3,
        product_name: 'Áo khoát cao cấp',
        product_image1: 'string',
        product_image2: 'string',
        product_type_fk: 1,
        product_size_fk: 1,
        product_unit_price: 400000,
        product_paid_price: 1,
        product_discount: 1,
        product_desciption: 'string', product_qty: 50
    },
    {
        product_id: 4,
        product_name: 'Áo gucci',
        product_image1: 'string',
        product_image2: 'string',
        product_type_fk: 1,
        product_size_fk: 1,
        product_unit_price: 800000,
        product_paid_price: 1,
        product_discount: 1,
        product_desciption: 'string',
        product_qty: 50
    },
    {
        product_id: 5,
        product_name: 'Quần đuì cao cấp',
        product_image1: 'string',
        product_image2: 'string',
        product_type_fk: 1,
        product_size_fk: 1,
        product_unit_price: 60000,
        product_paid_price: 1,
        product_discount: 1,
        product_desciption: 'string',
        product_qty: 50
    },
];
//user info
export const dataInfo: MenuTwoDataModel = {
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


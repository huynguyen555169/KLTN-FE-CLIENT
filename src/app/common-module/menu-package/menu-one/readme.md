# Menu.01 Menu ngang (navigation menu)

# Selector:

    app-menu-one

# Input:

    menus: MenuItemModel[] = [{
      name: string, // Tên hiển thị trên layout
      isActive: true, // link được active
      link: string // Đường dẫn tương ứng của item
    }]

    logo: 'string url'

# Output:

    itemClick: object menu item // Khi click chọn 1 menu item

# Module:

N/A

# Example:

    <app-menu-one [menus]="menus" [logo]="logo" (itemClick)="handleItemClick($event)"></app-menu-one>

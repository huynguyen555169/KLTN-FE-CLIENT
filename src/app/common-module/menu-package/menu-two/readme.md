# Menu.02 User Info

# Selector:

<app-menu-two></app-menu-two>

# Input:

    data: MenuTwoDataModel = {
      menuItems: { // Các option trong menu của user
        icon: string, // class of material icon,
        name: string, // Tên option
      }[],
      userInfo: {
        avatar: string// Image url,
        fullName: string,
        email: string
      }
    }

    position: string (optional, default = 'after') // position of menu dropdown is value of: above, below, before, after
    // Example: https://v9.material.angular.io/components/menu/overview

# Output:

    actionClick: MenuTwoMenuItemModel // object menu item, Khi click chọn 1 menu item

# Module:

{ MatMenuModule } from '@angular/material/menu';  
{ MatIconModule } from '@angular/material/icon';

# Example:

    <app-menu-two
      [data]="data"
      [position]="position"
      (actionClick)="menuClick($event)"
    ></app-menu-two>

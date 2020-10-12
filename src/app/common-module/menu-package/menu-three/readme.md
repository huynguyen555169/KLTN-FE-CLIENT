# Menu.03 Menu dọc (side bar)

# Selector:

    app-menu-three

# Input:

    data: {
      backgroundUserImage?: string (optional) // image background in user info
      userInfo: {
        avatar: string, // avatar image url
        fullName: string, // tên user
        email?: string (optional) // email user
      },
      urls: [{
        id: string,
        name: string, // tên hiển thị trên sidebar
        url: string, // url để navigate
        icon: string, // icon hiển thị (material icon)
        children: [{
          id: string,
          name: string, // tên hiển thị trên sidebar
          url: string, // url để navigate
          icon: string, // icon hiển thị (material icon)
        }]
      }],
      footActions: [{
        id: string,
        name: string, // tên hiển thị trên sidebar
        url: string, // url để navigate
        icon: string, // icon hiển thị (material icon)
        children: [{
          id: string,
          name: string, // tên hiển thị trên sidebar
          url: string, // url để navigate
          icon: string, // icon hiển thị (material icon)
        }]
      }]
    }

# Output:

N/A

# Module:

{ MatButtonModule } from '@angular/material/button';
{ MatIconModule } from '@angular/material/icon';
{ MatExpansionModule } from '@angular/material/expansion';

# Example:

    <app-menu-three [data]="data"></app-menu-three>

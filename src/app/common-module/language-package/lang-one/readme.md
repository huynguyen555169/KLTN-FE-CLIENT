# Lang.01 Dropdown chọn ngôn ngữ

# Selector:

<app-lang-one></app-lang-one>

# Input:

    data: LanguageOneModel[{
      id: string, // Định danh ngôn ngữ
      name: string, //Tên ngôn ngữ
      imageUrl: string, // Logo language: Recommended get image link at https://flagpedia.net/index
      isCurrent: boolean // Có đang là ngôn ngữ hệ thống (được chọn) hay không?
    }]

# Output:

    itemClick: LanguageOneModel //  object menu item khi click chọn 1 menu item

# Module:

{ MatIconModule } from '@angular/material/icon';

# Example:

    <app-lang-one
      [languages]="languages"
      (itemClick)="handle($event)"
    ></app-lang-one>

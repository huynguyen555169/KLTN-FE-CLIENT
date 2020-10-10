# Label.01 Label hiển thị thông số các khóa học, học viên,...

# Selector:

<app-label-one></app-label-one>

# Required

- Có module NumberPipeModule trong project

- Thay đổi đường dẫn import NumberPipeModule trong module LabelOneModule tương ứng với project

```sh
import { NumberPipeModule } from 'path/to/module';
```

# Input:

    data: LabelOneModel[] = [{
      icon: string // Là icon hiển thị có định dạng url,
      unit: string // tên hiển thị phía dưới icon,
      number: string | number // số bên cạnh icon
    }]
    startCount: boolean (default = false) // false: sẽ không bắt đầu đếm dù đã có data, true sẽ bắt đầu đếm (dùng để trigger việc đếm theo một sự kiện (scroll, click...))

# Output:

N/A

# Module:

N/A

# Example:

    <app-label-one
      [labels]="labels"
      [startCount]="isStartLabel"
    ></app-label-one>

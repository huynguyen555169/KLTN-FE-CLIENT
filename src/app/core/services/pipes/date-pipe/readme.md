#### Usage

- Copy short-date.pipe.ts vào project
- Import vào file module.ts của module muốn sử dụng

```sh
import { ShortDatePipe } from 'path/to/service';
```

- Thêm vào mảng declarations ở file module.ts vừa import

```sh
@NgModule({
  declarations: [SomethingElse, ShortDatePipe],
  imports: [],
  ...
```

- Ở file .html

```sh
{{ dateStringVariable | shortDate: "formatString":"seperate" }}
```

> formatString (required): "D(DD)-M(MM)-YY(YYYY) (m)hh:(m)mm:(s)ss"
> Không phân biệt thứ tự date time và giữa các phần trong date/time
> Bắt buộc: Giữa các phần của date ngăn cách bởi '-' và của time là ':'

> seperate (optional): dấu ngăn cách các phần của date ở kết quả trả về

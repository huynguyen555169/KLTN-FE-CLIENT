#### Usage

- Copy module number-pipe vào project
- Import vào file module.ts của module muốn sử dụng

```sh
import { NumberPipeModule } from 'path/to/module';
```

- Thêm vào mảng imports ở file module.ts vừa import

```sh
@NgModule({
  declarations: [],
  imports: [SomethingElse, NumberPipeModule],
  ...
```

- Ở file .html

```sh
{{ stringVariable  | moneyFormat: "separate" }}
```

> separate (optional, default: '.'): Ký hiệu phân tách các nhóm 3 chữ số

#### Usage

- Copy thư mục number-pipe vào project
- Import module NumberPipeModule vào file module.ts của module muốn sử dụng

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

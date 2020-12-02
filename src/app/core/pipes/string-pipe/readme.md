#### Usage

- Copy thư mục string-pipe vào project
- Import module StringPipeModule vào file module.ts của module muốn sử dụng

```sh
import { StringPipeModule } from 'path/to/module';
```

- Thêm vào mảng imports ở file module.ts vừa import

```sh
@NgModule({
  declarations: [],
  imports: [SomethingElse, StringPipeModule],
  ...
```

#### Usage

- Copy module StringPipeModule vào project
- Import vào file module.ts của module muốn sử dụng

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

- Ở file .html

```sh
{{ stringVariable | prefix: "prefixString" }}
```

> prefixString (optional)
> String hiển thị phía trước stringVariable

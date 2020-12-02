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
{{ stringVariable  | countNumber: "count":"duration" | async }}
```

> count (optional, default: 100): Số lần đếm trong vòng 'duration' mili-seconds (maximum recommended: 50~150)
> duration (optional, default: 3000): Thời gian đếm (tính bằng mili second) (recommended 3000~5000)
> Note: Chú ý thứ tự các biến. Nếu muốn 'count' lấy giá mặc định và custom 'duration' thì truyền count = 0 (chỉ truyền 1 tham số, count sẽ nhận giá trị đó chứ không phải duration)

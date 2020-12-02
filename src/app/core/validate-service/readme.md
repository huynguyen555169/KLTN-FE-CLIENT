#### Usage

- Copy folder validate-service vào project
- Import vào component cần sử dụng

```sh
import { CustomValidator } from 'path/to/service';
```

- Dùng ở hàm khởi tạo FormControl

```sh
this.formGroupName = new FormGroup({
  controlName: new FormControl('', [CustomValidator.required, ...])
});
```

- Hiển thị lỗi validate ở .html

```sh
<atag>{{ formGroup.controls[input.name].errors?.message }}</atag>
```

#### Functions

```sh
required(control: FormControl)
- Input phải được nhập liệu
```

> control: Được thêm tự động (callback) - là instance của FormControl đại diện cho Input

```sh
maxLength(max: number)
- Input được nhập tối đa max ký tự
```

> max: Số ký tự tối đa input được nhập

```sh
numberOnly(control: FormControl) : void
- Input chỉ được nhập kiểu số
```

> control: Được thêm tự động (callback) - là instance của FormControl đại diện cho Input

```sh
rangeLength(min: number, max: number) : void
- Input chỉ được nhập có độ dài trong khoảng min -> max
```

> min: Độ dài tối thiểu phải của input

> max: Độ dài tối đa được nhập của input

```sh
static rangeValue(min?: number, max?: number) : boolean
- Giá trị nhập vào input (kiểu số) có giá trị trong khoảng min -> max
```

> min: Giá trị tối thiểu nhập vào input (bỏ trống - null sẽ nhận giá trị -Inf)

> max: Giá trị tối đa nhập vào input (bỏ trống - null sẽ nhận giá trị +Inf)

```sh
email(control: FormControl)
- Kiểm tra định dạng chuỗi nhập vào có phải dạng email không
```

> control: Được thêm tự động (callback) - là instance của FormControl đại diện cho Input

```sh
checkSpecialCharacter(customMessage?: string)
- Kiểm tra các ký tự đặc biệt có xuất hiện trong chuỗi không
```

> customMessage (optional): Chuỗi lỗi user tự nhập

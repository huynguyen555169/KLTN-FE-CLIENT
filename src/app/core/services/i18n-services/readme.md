1. Install ngx-translate/core (>12.x) cho angular 9

2. Install ngx-translate/http-loader (>5.x) cho angular 9

3. Tạo thư mục i18n ở thư mục assets: Chứa các file json định nghĩa các chuỗi ứng với từng ngôn ngữ

   - \*\* Tên file: mã ngôn ngữ.json (Danh sách mã ngôn ngữ: https://www.loc.gov/standards/iso639-2/php/code_list.php) (vd: en.json (Tiếng anh), ja.json (Tiếng nhật), vi.json (Tiếng việt))

4. Ở file: app.module.ts

   - \*\* Import:
     TranslateModule.forRoot({
     loader: {
     deps: [HttpClient],
     provide: TranslateLoader,
     useFactory: HttpLoaderFactory
     }
     })
   - \*\* Thêm dòng trên dòng @NgModule(){...}:
     export function HttpLoaderFactory(http: HttpClient) {
     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
     }

5. Add i18n-services to project

6. Định nghĩa các file en.json, ja.json, vi.json

7. Dùng pipe translate trên HTML file: VD

   - \*\* en.json viết:
     "CARD2": {
     "sessions": "sessions"
     }
   - \*\* vi.json viết:
     "CARD2": {
     "sessions": "buổi"
     }
     => HTML viết:
     {{ "CARD2.sessions" | translate }}

8. Import i18n-service vào component có sự kiện thay đổi ngôn ngữ -> Set lại ngôn ngữ khi có sự kiện thay đổi ngôn ngữ

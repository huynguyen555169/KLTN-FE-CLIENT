#### Usage

- Copy http-request.service.ts vào project
- Import vào component cần sử dụng

```sh
import { HttpRequestService } from 'path/to/service';
```

- Inject vào component constructor

```sh
constructor(
    private httpRequest: HttpRequestService,
    ...
  ) {}
```

#### Functions

```sh
get(url: string, params?: {}, body?: any, headers?: HttpHeaders) : Observable<any>
- Tạo một get request
```

> url (required): API url

> params (optional): object param của API

> body (optional): object body của API

> headers (optional): object header của API

> Return: Observable<any>

```sh
delete(url: string, params?: {}, body?: any, headers?: HttpHeaders) : Observable<any>
- Tạo một delete request
```

> url (required): API url

> params (optional): object param của API

> body (optional): object body của API

> headers (optional): object header của API

> Return: Observable<any>

```sh
post(url: string, body?: any, params?: {}, headers?: HttpHeaders) : Observable<any>
- Tạo một post request
```

> url (required): API url

> params (optional): object param của API

> body (optional): object body của API

> headers (optional): object header của API

> Return: Observable<any>

```sh
put(url: string, body?: any, params?: {}, headers?: HttpHeaders) : Observable<any>
- Tạo một put request
```

> url (required): API url

> params (optional): object param của API

> body (optional): object body của API

> headers (optional): object header của API

> Return: Observable<any>

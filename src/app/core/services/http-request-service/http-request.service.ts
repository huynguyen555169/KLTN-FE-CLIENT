import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  get(url: string, params?: {}, body?: any, headers?: HttpHeaders) {
    const fetchOption = new HttpRequestOption();
    fetchOption.params = this.transformParamToHttpParams(params);

    if (!!headers) {
      fetchOption.headers = headers;
    }

    if (!!body) {
      fetchOption.body = body;
    }

    return this.http.get<any>(url, fetchOption);
  }

  delete(url: string, params?: {}, body?: any, headers?: HttpHeaders) {
    const deleteOption = new HttpRequestOption();
    deleteOption.params = this.transformParamToHttpParams(params);

    if (!!headers) {
      deleteOption.headers = headers;
    }

    if (!!body) {
      deleteOption.body = body;
    }

    return this.http.delete<any>(url, deleteOption);
  }

  post(url: string, body?: any, params?: {}, headers?: HttpHeaders) {
    const postOption = new HttpRequestOption();
    postOption.params = this.transformParamToHttpParams(params);

    if (!!headers) {
      postOption.headers = headers;
    }
    return this.http.post<any>(url, body, postOption);
  }

  put(url: string, body?: any, params?: {}, headers?: HttpHeaders) {
    const putOption = new HttpRequestOption();
    putOption.params = this.transformParamToHttpParams(params);

    if (!!headers) {
      putOption.headers = headers;
    }
    return this.http.put<any>(url, body, putOption);
  }

  private transformParamToHttpParams(params: {}) {
    let httpParams = new HttpParams();
    if (!!params) {
      Object.keys(params).forEach((paramKey) => {
        if (Array.isArray(params[paramKey])) {
          params[paramKey].forEach((value) => {
            httpParams = httpParams.append(paramKey, value);
          });
        } else {
          httpParams = httpParams.append(paramKey, params[paramKey]);
        }
      });
    }
    return httpParams;
  }
}

export class HttpRequestOption {
  params: HttpParams;
  headers: HttpHeaders;
  body: any;
  constructor() {
    this.params = null;
    this.headers = new HttpHeaders({ "Content-Type": "application/json" });
  }
}
export class HttpRequestModel {
  params?: {};
  body?: {};
  headers?: HttpHeaders;
}

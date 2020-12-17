import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpRequestService) { }
  getListProvince(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}province/get-all`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
  getListDistrict(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}province/get-district`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
  getListWard(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}province/get-ward`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
  createOrder(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}order/insert-sale-order`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.post(apiUrl, params, body, headers);
  }
}

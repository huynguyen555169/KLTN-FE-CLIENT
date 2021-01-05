import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpRequestService) { }

  getAllCart(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}cart/get-by-customer`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
  addProduct(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}cart/insert-cart`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.post(apiUrl, params, body, headers);
  }
  deleteProduct(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}cart/delete-cart`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.delete(apiUrl, params, body, headers);
  }
  updateQty(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}cart/update-qty`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.put(apiUrl, params, body, headers);
  }
  addToPayment(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}cart/add-to-payment`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.post(apiUrl, params, body, headers);
  }

  updateToBuy(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}cart/update-to-buy`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.post(apiUrl, params, body, headers);
  }
}

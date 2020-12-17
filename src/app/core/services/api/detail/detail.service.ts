import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpRequestService) { }
  getListFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/get-by-id`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }

  getListComment(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}rating/get-by-product`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }

  postRating(parram: HttpRequestModel, token: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}rating/rate-by-customer`;
    const params = parram.params;
    const body = parram.body;
    const headers = token.headers;
    return this.http.post(apiUrl, params, body, headers);
  }
}

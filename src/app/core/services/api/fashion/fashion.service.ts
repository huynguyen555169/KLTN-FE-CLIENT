import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class FashionService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpRequestService) { }
  getListFashion(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/get-all-client`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
}

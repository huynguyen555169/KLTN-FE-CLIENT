import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class DetailAccountService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpRequestService) { }

  getInfoAccount(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}customer/get-info`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }

  editInfoAccount(parram: HttpRequestModel, header: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}customer/update-profile`;
    const params = parram.params;
    const body = parram.body;
    const headers = header.headers;
    return this.http.put(apiUrl, params, body, headers);
  }
}

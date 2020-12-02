import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = 'http://192.168.0.108:8080/'

  constructor(private http: HttpRequestService) { }
  createUser(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}customer/register`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.post(apiUrl, params, body, headers);
  }
}

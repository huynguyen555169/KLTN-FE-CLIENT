import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpRequestService) { }
  createUser(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}customer/register`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.post(apiUrl, params, body, headers);
  }
}

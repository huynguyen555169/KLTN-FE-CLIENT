import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequestModel, HttpRequestService } from '../../http-request-service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpRequestService) { }
  getListSearch(parram: HttpRequestModel) {
    const apiUrl = `${this.baseUrl}product/search-product`;
    const params = parram.params;
    const body = parram.body;
    const headers = parram.headers;
    return this.http.get(apiUrl, params, body, headers);
  }
}
